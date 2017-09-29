/**
 * Created by wyg on 2017/9/21.
 */
import $axios from './axiosSetting';

/***
 * 底层get方法
 * @param url
 * @param params
 * @param [loading]
 */
export const axiosGet = (url,params,loading)=>$axios.get(url,{params,loading})

/***
 * 底层post方法
 * @param url
 * @param data
 * @param [loading]
 */
export const axiosPost = (url,data,loading)=>$axios.post(url,data,{loading})
