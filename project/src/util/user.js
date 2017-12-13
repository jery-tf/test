/**
 * Created by asus on 2017/12/5.
 */
//从缓存获取用户信息
 const userInit = {
  "token": "",
  "uuid": "",
  "app_version": "1.3.4",
  "app_model": " PLK-TL01H6X"
}
export const getUserInfo = ()=>{
  let userInfo = localStorage.getItem('userInfo');
  return userInfo?JSON.parse(userInfo):userInit;
};
//设置用户信息到缓存
export const setUserInfo = (userInfo)=>{
  if(userInfo){
    localStorage.setItem('userInfo',JSON.stringify(userInfo));
  }
};
//判断token是否存在
export const isLogin = () =>{
  if (!getUserInfo().token){
    return false
  }else{
    return true
  }
}
//url参数配置
export const reqParms = (params)=>{
  let qs = {};
  qs.header =  {
    "token": getUserInfo().token,
    "uuid": getUserInfo().uuid,
    "app_version": "1.3.4",
    "app_model": " PLK-TL01H6X"
  };
  qs.body = params;
  return qs;
};
