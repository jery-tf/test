/**
 * Created by wyg on 2017/9/21.
 */
import { axiosGet } from './baseApi'

export const getUser = (params,loading)=>axiosGet('/user',params,loading);


