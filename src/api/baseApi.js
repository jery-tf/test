/**
 * Created by wyg on 2017/9/21.
 */
import $axios from './axiosSetting';
import Util from '../util';
import Config from '../config'

/**********************不需要权限认证*****************************/
let  headers = { 'x-api-key': Config.C2XApiKey};
/***
 * 底层get方法
 * @param url
 * @param params
 * @param [loading]
 */
export const axiosGet = (url,params,loading)=>$axios.get(url,{params,loading,headers});

/***
 * 底层post方法
 * @param url
 * @param data
 * @param [loading]
 */
export const axiosPost = (url,data,loading)=>$axios.post(url,data,{loading,headers});

/***
 * 底层delete方法
 * @param url
 * @param [loading]
 */
export const axiosDelete = (url,loading)=>$axios.post(url,{loading,headers});

/***
 * 底层put 方法
 * @param url
 * @param data
 * @param [loading]
 */
export const axiosPut = (url,data,loading)=>$axios.put(url,data,{loading,headers});



/**********************需要权限认证*****************************/
// 'x-api-key': Config.C2XApiKey
let  tokenHeaders = { "Authorization": `Bearer ${Util.login.getAccessToken()}`,'x-api-key': Config.C2XApiKey};

/***
 * 底层get方法
 * @param url
 * @param params
 * @param [loading]
 */
export const axiosGetToken = (url,params,loading)=>$axios.get(url,{params,loading,headers:tokenHeaders});

/***
 * 底层post方法
 * @param url
 * @param data
 * @param [loading]
 */
export const axiosPostToken = (url,data,loading)=>$axios.post(url,data,{loading,headers:tokenHeaders});

/***
 * 底层delete方法
 * @param url
 * @param [loading]
 */
export const axiosDeleteToken = (url,loading)=>$axios.post(url,{loading,headers:tokenHeaders});

/***
 * 底层put 方法
 * @param url
 * @param data
 * @param [loading]
 */
export const axiosPutToken = (url,data,loading)=>$axios.put(url,data,{loading,headers:tokenHeaders});
