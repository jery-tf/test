/**
 * Created by wyg on 2017/10/9.
 */
//收藏api
import {axiosPostToken,axiosGetToken} from './baseApi'

//获取事项收藏
export const getMatterCollection = (params,config)=>axiosPostToken(`xndt/v1/collectionquery${reqParms(params)}`,'',config);

//添加收藏
export const addCollection = (params,config)=>axiosPostToken(`/xndt/v1/collection${reqParms(params)}`,'',config)

const reqParms = (params)=>{
  let qs = '?';
  for(let index in params){
    qs += `${index}=${params[index]}&`
  }
  return qs;
};
