/**
 * Created by wyg on 2017/9/28.
 */
import { axiosGet ,axiosGetToken} from './baseApi'
import Config from '../config';

/***
 * 获取用户信息
 * @param params  access_token
 * @param config
 */
export const getUserInfo = (params,config)=>axiosGetToken(`${Config.loginUrl}/oauth2/user_info`,params,config);

/***
 * 根据Id 获取用户详情
 * @param userId
 */
export const getUserDetails = userId=>axiosGetToken(`/uop/v1/users/${userId}`)
