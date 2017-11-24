/**
 * Created by wyg on 2017/10/2.
 */

import { axiosGet,axiosPost } from './baseApi'

//根据字典key 获取办事列表
export const getDictionaries = (dictTypeNames,config)=>axiosGet(`/approveinterface/v1/dicttypes/dictdatas/${dictTypeNames}`,config);


//验证码

export const senvCode = (params,config)=>axiosGet(`http://172.16.17.20:8080/mobile/register/phone/sendPhoneCode${reqParms(params)}`,config);
const reqParms = (params)=>{
  let qs = [];
  for(let index in params){
    qs.push(`${index}=${params[index]}`);
  }
  return '?'+qs.join('&');
};
