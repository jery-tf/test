/**
 * Created by wyg on 2017/9/21.
 */
import axios from 'axios';
import proConfig from '../config';
import MintUI from 'mint-ui';
import Util from '../util'

let AxiosIns = axios.create({
  baseURL: proConfig.apiUrl,
  timeout: 20000,
  contentType: 'application/json',
})

let timer = [];
let delay = 300;

AxiosIns.interceptors.request.use(config => {
  if (proConfig.environment == 'dev') {
    if (config) {
      config.headers = Object.assign({}, config.headers, {'x-api-key': proConfig.C2XApiKey});
    } else {
      config = {headers: {'x-api-key': proConfig.C2XApiKey}};
    }
  }

  if (config.loading) {
    timer.push(setTimeout(() => {
      MintUI.Indicator.open(config.loading);
    }, delay))
  }
  return config;
})

AxiosIns.interceptors.response.use(response => {
  for (let t of timer) {
    clearTimeout(t);
  }
  MintUI.Indicator.close();
  return response.data;
}, error => {
  for (let t of timer) {
    clearTimeout(t);
  }
  MintUI.Indicator.close();
  if(error.response){
    if(error.response.status === 401){
      //如果是登录的接口 401 直接返回错误
      if(error.response.request.responseURL.indexOf('oauth2/applogin')){
        return Promise.reject(error.response.data);
      }
      //其他401 转登录
      console.log('其他401')
    }
  }
  console.log('error',error.response);
  if(error.response){
    return Promise.reject(error.response.data);
  }
});



export default AxiosIns;
