import {axiosGetToken} from './baseApi'
import Config from '../config';
//根据频道ID获取所属频道列表
export const forpeo = (params,config)=>axiosGetToken(`/mobile/categoryInfo/getListByOrgIdAndPid/4/Crg24Rh6S7WfOxu1MOFMow`,params,config);
export const publict = (params,config)=>axiosGetToken(`/mobile/categoryInfo/getListByOrgIdAndPid/4/j22g0MqqQSyxSEKHmGCQQA`,params,config);
//根据输入模糊查询
export const getSearch = (params,config)=>axiosGetToken(`/approveinterface/v1/approveinfo${reqParms(params)}`,'',config);

const reqParms = (params)=>{
  let qs = '?';
  for(let index in params){
    qs += `${index}=${params[index]}&`
  }
  return qs;
};
