//地址选择接口
import {axiosGet} from './baseApi'
//选择地区区域
export const pickerAreaf = (params,config)=>axiosGet(`/uop/v1/orgs/${1}`,params,config);

//选择地区区域的子目录
export const pickerAreas= (nameid,params,config)=>axiosGet(`/uop/v1/orgs/${nameid}/children${reqParms(params)}`,params,config);
const reqParms = (params)=>{
  let qs = ['categoryId=10-Z'];

  return '?'+qs;
};
