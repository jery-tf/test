import {axiosPost, axiosGet, axiosPostToken} from './baseApi'
import Config from '../config';

// 提交咨询
export const PutConsult = (params,config)=>axiosPost(`/accept/v1/consult`,params,config);
const reqParms = (params)=>{
  let qs = [];
  for(let index in params){
    qs.push(`${index}=${params[index]}`);
  }
  return '?'+qs.join(',');
};
