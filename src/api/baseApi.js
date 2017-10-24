/**
 * Created by wyg on 2017/9/21.
 */
import $axios from './axiosSetting';
import Util from '../util';


/**************************内部方法*********************************/
const assignHeader = (config)=>{
  if(config && config.headers){
    config.headers = Object.assign({},config.headers);
  }else{
    config = {};
  }
  return config;
}

const assignTokenHeaders = (config)=>{
  if(config && config.headers){
    config.headers = Object.assign({},tokenHeaders,config.headers);
  }else{
    config = Object.assign({},{headers:tokenHeaders});
    // console.log('assignTokenHeaders',config);
  }
  return config;
}

/**********************不需要权限认证*****************************/
// const headers = { 'x-api-key': Config.C2XApiKey};

/***
 * 底层get方法
 * @param url
 * @param params
 * @param [config]
 */
// export const axiosGet = (url,params,loading)=>$axios.get(url,{params,loading,headers});
export const axiosGet = (url,params,config)=>{
  return $axios.get(url,Object.assign({},config,{params}))
};
/***
 * 底层post方法
 * @param url
 * @param data
 * @param [config]
 */
// export const axiosPost = (url,data,loading)=>$axios.post(url,data,{loading,headers});
export const axiosPost = (url,data,config)=>$axios.post(url,data,config);
/***
 * 底层delete方法
 * @param url
 * @param [config]
 */
// export const axiosDelete = (url,loading)=>$axios.post(url,{loading,headers});
export const axiosDelete = (url,config)=>$axios.post(url,config);

/***
 * 底层put 方法
 * @param url
 * @param data
 * @param [loading]
 */
export const axiosPut = (url,data,config)=>$axios.put(url,data,config);



/**********************需要权限认证*****************************/

let  tokenHeaders = { "Authorization": `Bearer ${Util.login.getAccessToken()}`};

/***
 * 底层get方法
 * @param url
 * @param params
 * @param [config]
 */
// export const axiosGetToken = (url,params,loading)=>$axios.get(url,{params,loading,headers:tokenHeaders});
export const axiosGetToken = (url,params,config)=>{
  config = assignTokenHeaders(config);
  config = Object.assign({},config,{params});
  // console.log('axiosGetToken-->',config);
  return $axios.get(url,config);
}


/***
 * 底层post方法
 * @param url
 * @param data
 * @param [config]
 */
// export const axiosPostToken = (url,data,loading)=>$axios.post(url,data,{loading,headers:tokenHeaders});
export const axiosPostToken = (url,data,config)=>$axios.post(url,data,assignTokenHeaders(config));


/***
 * 底层delete方法
 * @param url
 * @param [loading]
 */
export const axiosDeleteToken = (url,config)=>$axios.delete(url,assignTokenHeaders(config));

/***
 * 底层put 方法
 * @param url
 * @param data
 * @param [loading]
 */
export const axiosPutToken = (url,data,loading)=>$axios.put(url,data,assignTokenHeaders(config));

