/**
 * Created by wyg on 2017/9/28.
 */
/**
 * Created by wyg on 2017/9/21.
 */
import { axiosPost ,axiosGet} from './baseApi'
import Config from '../config';

//获取aes加密信息
export const getLoginAes = (params,loading)=>axiosGet(`/wechat/util/encryptAES128`,params,loading);

//用户登录
export const userLogin = (params,loading)=>axiosPost(`${Config.loginUrl}/oauth2/applogin`,params,loading);
