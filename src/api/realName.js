/**
 * Created by wyg on 2017/9/29.
 */
//实名认证
import { axiosGetToken ,axiosGet ,axiosPostToken} from './baseApi'


export const realName = (params)=>$axios.post(url,params);

//签名
export const getAppSign = (params,config)=>axiosGet(`/wechat/util/appSign`,params,config);

//获取实人认证结果
export const getWxAuthenticationResult = (params,config)=>axiosGetToken(`/wechat/util/getdetectinfo`,params,config);


//存储实人认证结果
export const postWxAuthenticationResult = (id,params,config)=>axiosPostToken(`/uop/v1/users/${id}`,params,config);
