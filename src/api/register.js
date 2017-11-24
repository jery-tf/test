/**
 * Created by wyg on 2017/10/1.
 */
import {axiosPost ,axiosGet} from './baseApi'
//个人注册
export const registerGo = (params,config)=>axiosPost(`/xndt/svp/v1/userreg`,params,config);

export const legal = (params,loading)=>axiosPost(`/xndt/svp/v1/userreal`,params,loading);

export const uableRegi = (params,loading)=>axiosGet(`/xndt/svp/v1/userexists`,params,loading);
// 企业注册
export const registerCmp = (params,config)=>axiosPost(`/xndt/v1/enterprisereg`,params,config);
//获取授权人相关企业和单位
export const getabcmp = (params,config)=>axiosPost(`/xndt/v1/usercoverauthorization`,params,config);

//授权人管理查看接口
export const getauthorise = (params,config)=>axiosPost(`/xndt/v1/authorizedmanmanagement`,params,config);
//被授权人管理查看接口
export const getunicon = (params,config)=>axiosPost(`/xndt/v1/viewauthorization`,params,config);

//被授权人授权事项高级查询

export const getapprove = (params,config)=>axiosGet(`/approveinterface/v1/dicttypes/dictdatas/法人分类
`,params,config);

//根据统一社会信用代码查看企业
export const seecompany = (uniscid,params,config)=>axiosGet(`http://172.16.17.20:8080/mobile/register/checkEnterpriseInfo/${uniscid}
${reqParms(params)}`,config);
const reqParms = (params)=>{
  let qs = [];
  for(let index in params){
    qs.push(`${index}=${params[index]}`);
  }
  return '?'+qs.join('&');
};
