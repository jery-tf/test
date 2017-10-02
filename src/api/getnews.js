import { axiosPost ,axiosGet} from './baseApi'
import Config from '../config';
//获取公开频道页面信息
export const getnews = (params,loading)=>axiosGet(`${Config.cmsUrl}/creatorCMS/docManage/remotePubDocList.page`,params,loading);
