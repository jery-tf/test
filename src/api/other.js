/**
 * Created by wyg on 2017/10/2.
 */

import { axiosGet,axiosPost } from './baseApi'

//根据字典key 获取办事列表
export const getDictionaries = (dictTypeNames,config)=>axiosGet(`/approveinterface/v1/dicttypes/dictdatas/${dictTypeNames}`,config);
