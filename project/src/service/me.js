/**
 * Created by asus on 2017/12/5.
 */
/*登陆注册*/
import {_axios} from './baseApi'
//登陆
export const login = (params) =>_axios(`/logisticsForum/member/login.do`,params);
//发送验证码
export const sendCode = (params) => _axios(`/logisticsForum/message/sendVcode.do`,params);
//获取验证码（测试）
export const getCode = (params) => _axios(`/logisticsForum/member/getCodeCache.do`,params);
//注册
export const register = (params) =>_axios(`logisticsForum/member/register.do`,params)
