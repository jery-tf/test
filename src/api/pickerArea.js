//地址选择接口
import {axiosGet} from './baseApi'
//选择地区区域
export const pickerAreaf = (params,config)=>axiosGet(`/uop/v1/orgs/${1}`,params,config);

