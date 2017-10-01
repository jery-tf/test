/**
 * Created by wyg on 2017/10/1.
 */
import {axiosPost ,axiosGet} from './baseApi'
//用户注册
export const registerGo = (params,config)=>axiosPost(`/xndt/svp/v1/userreg`,params,config);

export const legal = (params,loading)=>axiosPost(`/xndt/svp/v1/userreal`,params,loading);

export const uableRegi = (params,loading)=>axiosGet(`/xndt/svp/v1/userexists`,params,loading);
