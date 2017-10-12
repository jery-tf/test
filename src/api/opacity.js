import {axiosPost ,axiosGetToken} from './baseApi'
//用户注册
export const forpeo = (params,config)=>axiosGetToken("http://172.16.17.83:8100/creatorCMS/docManage/remoteSubChannelList.page",params,config);
//根据输入模糊查询
export const getSearch = (params,config)=>axiosGetToken(`/approveinterface/v1/approveinfo${reqParms(params)}`,'',config);

const reqParms = (params)=>{
  let qs = '?';
  for(let index in params){
    qs += `${index}=${params[index]}&`
  }
  return qs;
};
