import {axiosPost, axiosGet, axiosPostToken} from './baseApi'
import Config from '../config';

// 办事咨询
export const PutConsult = (params,config)=>axiosPost(`/accept/v1/consult`,params,config);
const reqParms = (params)=>{
  let qs = [];
  for(let index in params){
    qs.push(`${index}=${params[index]}`);
  }
  return '?'+qs.join(',');
};

//我的咨询
export const myConsult = (params,config)=>axiosGet(`/accept/v1/consult`,params,config);
