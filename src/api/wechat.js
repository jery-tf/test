/**
 * Created by wyg on 2017/10/16.
 */
//微信相关接口
import { axiosGet } from './baseApi'

//获取微信签名需要参数
export const getWechatJSSDKParams = (params,config)=>axiosGet(`/wechat/util/getJSSDKParams`,params,config);
