import {axiosPost,axiosDeleteToken,axiosGet } from './baseApi'
//获取地址列表
export const addresslist = (params,config)=>axiosPost(`/xndt/v1/deliveryaddressquery`,params,config);
//修改地址、添加地址
export const addresscheck = (params,config)=>axiosPost(`/xndt/v1/deliveryaddressaddedit`,params,config);
//收货地址详情查询接口
export const addressMoreList = (params,config)=>axiosPost(`/xndt/v1/deliveryaddressdetails`,params,config);
// 删除接口
export const deleteaddress = (params,config)=>axiosDeleteToken(`/xndt/v1/addressdelete${reqParms(params)}`,params,config);
const reqParms = (params)=>{
  let qs = [];
  for(let index in params){
    qs.push(`${index}=${params[index]}`);
  }
  return '?'+qs.join('&');
};


//全国省级地址查询
export const province = (params,config)=>axiosGet(`/logistics/v1/dicNormarea/selectAreaCode1`,params,config);

//查询省级下去的地级市
export const getcity = (params,config)=>axiosGet(`/logistics/v1/dicNormarea/selectAreaCode2/${params}`,params,config);

//查询地级市下面的区级
export const district = (params,config)=>axiosGet(`/logistics/v1/dicNormarea/selectAreaCode3/${params}`,params,config);
