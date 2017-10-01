/**
 * Created by wyg on 2017/9/28.
 */
import { axiosGet ,axiosGetToken} from './baseApi'
import Config from '../config';
/***
 * 用户相关接口
 * 公共参数
 * @param loading [加载时显示的文字]
 */

/***
 * 获取用户信息
 * @param params  access_token
 * @param loading
 */
export const getUserInfo = (params,config)=>axiosGetToken(`${Config.loginUrl}/oauth2/user_info`,params,config);


export const getUserDetails = id=>axiosGetToken(`/uop/v1/users/${id}`)
