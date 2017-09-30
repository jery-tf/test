/**
 * Created by wyg on 2017/9/29.
 */
//实名认证
import { axiosGetToken } from './baseApi'
import $axios from './axiosSetting';
import Config from '../config';

let url = 'https://iauth-sandbox.wecity.qq.com/new/cgi-bin/auth.php';
let config={
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  transformRequest: [function (data) {
    let ret = '';
    for (let it in data) {
      ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
    }
    return ret
  }],
}

// http://172.16.17.20:8080/

// export const realName = (params)=>$axios.post(url,params,config);


//获取授权 POST /wechat/util/appSign
// export const getAppSign = (params,loading)=>axiosPost(`${Config.AppSignUrl}/wechat/util/appSign`,params,loading);

export const getAppSign = (params,loading)=>axiosGetToken(`${Config.AppSignUrl}/wechat/util/appSign`,params,{loading});
