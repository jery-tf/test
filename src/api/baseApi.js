/**
 * Created by wyg on 2017/9/21.
 */
import $axios from './axiosSetting';
import Util from '../util';

/**********************不需要权限认证*****************************/
/***
 * 底层get方法
 * @param url
 * @param params
 * @param [loading]
 */
export const axiosGet = (url,params,config)=>$axios.get(url,{params,loading});

/***
 * 底层post方法
 * @param url
 * @param data
 * @param [loading]
 */
export const axiosPost = (url,data,loading)=>$axios.post(url,data,{loading});

/***
 * 底层delete方法
 * @param url
 * @param loading
 */
export const axiosDelete = (url,loading)=>$axios.post(url,{loading});

/***
 * 底层put 方法
 * @param url
 * @param data
 * @param loading
 */
export const axiosPut = (url,data,loading)=>$axios.put(url,data,{loading});



/**********************需要权限认证*****************************/

let  headers = { "Authorization": `Bearer ${Util.getAccessToken()}`};

/***
 * 底层get方法
 * @param url
 * @param params
 * @param [loading]
 */
export const axiosGetToken = (url,params,loading)=>$axios.get(url,{params,loading,headers});

/***
 * 底层post方法
 * @param url
 * @param data
 * @param [loading]
 */
export const axiosPostToken = (url,data,loading)=>$axios.post(url,data,{loading,headers});

/***
 * 底层delete方法
 * @param url
 * @param loading
 */
export const axiosDeleteToken = (url,loading)=>$axios.post(url,{loading,headers});

/***
 * 底层put 方法
 * @param url
 * @param data
 * @param loading
 */
export const axiosPutToken = (url,data,loading)=>$axios.put(url,data,{loading,headers});
