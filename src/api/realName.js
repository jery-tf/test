/**
 * Created by wyg on 2017/9/29.
 */
//实名认证
import { axiosGetToken ,axiosGet } from './baseApi'
import $axios from './axiosSetting';


export const realName = (params)=>$axios.post(url,params);

//实人认证加密
export const getAppSign = (params,loading)=>axiosGet(`/wechat/util/appSign`,params,{loading});
