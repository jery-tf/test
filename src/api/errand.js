/**
 * Created by wyg on 2017/10/2.
 */

import {axiosGet,axiosGetToken,axiosPost,axiosPostToken,axiosDeleteToken} from './baseApi'

//根据事项id 获取事项接口
export const getErrandList = (params,config)=>axiosGet(`/approveinterface/v1/approveinfo${reqParms(params)}`,'',config);

//获取办件 详情  根据事项id获取事项基本信息
export const getErrandDetails = (approveId,config)=>axiosGet(`/approveinterface/v1/approveinfo/${approveId}`,null,config);

//根据Id查询事项名称
export const getApproveName = (approveId,config)=>axiosGetToken(`/approveinterface/v1/approveAdvanced/getById/${approveId}`,config);

//获取事项 材料列表
export const getMaterialList = (params,config)=>axiosGet(`/approveinterface/v1/approveMaterial${reqParms(params)}`,'',config);

//附件上传接口
export const uploadFile = (params,config)=>axiosPost('/minio/apk/attach/upload',params,config)


//办件暂存 新增
export const addErrandExample = (params,config) =>
  axiosPostToken('/accept/v1/instance/saveInstance',params,config);

//获取办件实例
export const getErrandInstance = (instanceId,config) =>
  axiosGetToken(`/accept/v1/instance/${instanceId}`,null,config);

//更新办件实例
export const updataErrandInstance = (instanceId,params,config)=>
  axiosPostToken(`/accept/v1/instance/${instanceId}`,params,config);

// 删除办件实例
export const deleteErrandInstance = (instanceId,config)=>
  axiosDeleteToken(`/accept/v1/instance/${instanceId}`,config);


//参数处理函数
const reqParms = (params)=>{
  let qs = '?';
  for(let index in params){
    qs += `${index}=${params[index]}&`
  }
  return qs;
};
