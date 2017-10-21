import {axiosPost} from './baseApi'
//获取地址列表
export const addresslist = (params,config)=>axiosPost(`/xndt/v1/deliveryaddressquery`,params,config);
//修改地址、添加地址
export const addresscheck = (params,config)=>axiosPost(`/xndt/v1/deliveryaddressaddedit`,params,config);
//收货地址详情查询接口
export const addressMoreList = (params,config)=>axiosPost(`/xndt/v1/deliveryaddressdetails`,params,config);
