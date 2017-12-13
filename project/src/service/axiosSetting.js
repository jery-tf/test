/**
 * Created by tangfeng on 2017/12/4.
 * 封装 axios
 */
import axios from 'axios';

let data = {};
data.body = '';
let AxiosIns = axios.create({
  baseURL: '/proxy',
  timeout: 10000,
  contentType: 'application/json',
})
AxiosIns.interceptors.request.use(config => {

  return config;
})
AxiosIns.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 返回 401 清除token信息并跳转到登录页面
          router.replace({
            path: 'login',
            query: {redirect: router.currentRoute.fullPath}
          })
      }
    }
    return Promise.reject(error.response.data)   // 返回接口返回的错误信息
  });
export default AxiosIns;
