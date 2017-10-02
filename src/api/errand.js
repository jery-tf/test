/**
 * Created by wyg on 2017/10/2.
 */

import { axiosPost ,axiosGet} from './baseApi'

//根据字典key 获取办事列表
export const getErrandLeftList = (params,config)=>axiosPost(`/approveinterface/v1/dicttypes/dictdatas`,params,config);

//根据事项id 获取事项接口
export const getErrandList = (params,config)=>axiosGet(`/approveinterface/v1/approveinfo`,params,config);
