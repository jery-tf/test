import {axiosPostToken ,axiosGetToken,axiosPost} from './baseApi'
//修改密码
export const checkPwd = (userId,params,config)=>axiosPostToken(`/sso/v1/userpwd/${userId}${reqParms(params)}`,params,config);
const reqParms = (params)=>{
  let qs = [];
  for(let index in params){
    qs.push(`${index}=${params[index]}`);
  }
  return '?'+qs.join('&');
};
//判断用户密码是否正确
export const searchPwd = (paramsfor,config)=>axiosGetToken(`/sso/v1/${reqParmsfor(paramsfor)}`,config);
const reqParmsfor = (paramsfor)=>{
  let qs = [];
  for(let index in paramsfor){
    qs.push(`${index}/${paramsfor[index]}`);
  }
  return qs.join('/');
};

//修改手机号码
export const changeNum = (userId,params,config)=>axiosPostToken(`/uop/v1/users/${userId}`,params,config);
