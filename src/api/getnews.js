import {axiosPost, axiosGet, axiosGetToken} from './baseApi'
import Config from '../config';
//获取公开频道页面信息
export const getnews = (params,config)=>{
  console.log('getnews',params,config);
  return axiosGetToken("http://172.16.17.44:8080/creatorCMS/docManage/remotePubDocList.page",params,config);
}
