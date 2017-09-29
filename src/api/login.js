/**
 * Created by wyg on 2017/9/28.
 */
/**
 * Created by wyg on 2017/9/21.
 */
import { axiosPost } from './baseApi'
import Config from '../config';


//用户登录
export const userLogin = (params,loading)=>axiosPost(`${Config.loginApiUrl}oauth2/applogin`,params,loading);
