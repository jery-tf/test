/**
 * Created by wyg on 2017/9/21.
 */
import axios from 'axios';
import proConfig from '../config';
import MintUI from 'mint-ui';

let AxiosIns = axios.create({
  baseURL:proConfig.apiUrl,
  timeout : 20000,
  contentType: 'application/json',
})

let timer = [];
let delay = 300;

AxiosIns.interceptors.request.use(config=>{
  if(config.loading){
    timer.push(setTimeout(()=>{
      MintUI.Indicator.open(config.loading);
    },delay))
  }
  return config;
})

AxiosIns.interceptors.response.use(response=>{
  for(let t of timer){
    clearTimeout(t);
  }
  MintUI.Indicator.close();
  // try{
  //   if(response.data){
  //     if(response.data.Code !== 0){
  //       console.log('111');
  //       MintUI.Toast(response.data.Message);
  //     }
  //   }
  // }catch(e){
  //   console.log(e);
  // }
  return response.data;
},(error)=>{
  for(let t of timer){
    clearTimeout(t);
  }
  MintUI.Indicator.close();
  try{
    //接口预留 401跳登录
    // if(error.response.data.Code === 401){
    //   setTimeout(()=>{
    //     Vue.$router.push({
    //       name : 'userLogin'
    //     })
    //   },100)
    // }
  }catch(e){
    console.log(e);
  }
  return Promise.reject(error);
})
export default AxiosIns;
