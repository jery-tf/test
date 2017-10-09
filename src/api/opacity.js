import {axiosPost ,axiosGet} from './baseApi'
//用户注册
export const forpeo = (params,config)=>axiosGet("http://172.16.17.83:8100/creatorCMS/docManage/remoteSubChannelList.page",params,config);
