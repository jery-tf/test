import {axiosPost, axiosGet, axiosGetToken} from './baseApi'
import Config from '../config';
//获取公开频道页面信息
export const getnews = (params,config)=>{
  return axiosGetToken(`${Config.cmsUrl}/creatorCMS/docManage/remoteSubChannelList.page`,params,config);
}
//获取公开列表的二级页面
export const getnewsinfo = (params,config)=>{
  return axiosGetToken(`${Config.cmsUrl}/creatorCMS/docManage/remotePubDocList.page`,params,config);
}

