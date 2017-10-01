/**
 * Created by wyg on 2017/10/1.
 */
import {axiosPost} from './baseApi'
//用户注册
export const registerGo = (params,config)=>axiosPost(`/xndt/svp/v1/userreg`,params,config);
