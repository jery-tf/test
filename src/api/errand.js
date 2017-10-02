/**
 * Created by wyg on 2017/10/2.
 */

import { axiosPost ,axiosGet} from './baseApi'

//用户登录
export const getErrandLeftList = (params,config)=>axiosPost(`/approveinterface/v1/dicttypes/dictdatas`,params,config);
