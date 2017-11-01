/**
 * Created by wyg on 2017/10/1.
 */
import {axiosPost ,axiosGet} from './baseApi'
//个人注册
export const registerGo = (params,config)=>axiosPost(`/xndt/svp/v1/userreg`,params,config);

export const legal = (params,loading)=>axiosPost(`/xndt/svp/v1/userreal`,params,loading);

export const uableRegi = (params,loading)=>axiosGet(`/xndt/svp/v1/userexists`,params,loading);
// 企业注册
export const registerCmp = (params,config)=>axiosPost(`/xndt/v1/enterprisereg`,params,config);
//获取授权人相关企业和单位
export const getabcmp = (params,config)=>axiosPost(`/xndt/v1/usercoverauthorization`,params,config);

//授权人管理查看接口
export const getauthorise = (params,config)=>axiosPost(`/xndt/v1/authorizedmanmanagement`,params,config);
//被授权人管理查看接口
export const getunicon = (params,config)=>axiosPost(`/xndt/v1/viewauthorization`,params,config);
