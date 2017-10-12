/**
 * Created by wyg on 2017/9/29.
 */
//实名认证
import { axiosGetToken ,axiosGet } from './baseApi'


export const realName = (params)=>$axios.post(url,params);

//签名
export const getAppSign = (params,config)=>axiosGet(`/wechat/util/appSign`,params,config);

//获取实人认证结果
export const getWxAuthenticationResult = (params,config)=>axiosGetToken(`/wechat/util/getdetectinfo`,params,config);
