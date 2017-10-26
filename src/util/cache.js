/**
 * Created by wyg on 2017/10/25.
 */
import {getLocalStorage,setLocalStorage} from './other'

//转hashCode
export const hashCode = (str)=>{
  let hash = 0;
  if (str.length == 0) return hash;
  for (let i in str) {
    let char = str.charCodeAt(i);
    hash = ((hash<<5)-hash)+char;
    hash = hash & hash;
  }
  return hash;
};

//获取所有的缓存数据
export const getCacheData=()=>getLocalStorage('cacheData');

//根据key获取缓存数据
export const getCacheDataByKey=(key)=>{
  if(!key){
    console.warn('请检查参数 getCacheDataByKey');
    return null;
  }
  let cacheData = getCacheData();
  if(cacheData&&cacheData[key]){
    return cacheData[key];
  }
  return null;
};

//根据KEY设置缓存数据
export const setCacheData = (key,data)=>{
  if(!key){
    console.warn('请检查参数 setCacheData');
    return
  }
  let cacheData = getCacheData();
  if(!cacheData) cacheData = {};
  cacheData[key] = data;
  setLocalStorage('cacheData',cacheData);
};
