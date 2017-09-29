/**
 * Created by wyg on 2017/9/29.
 */


//设置token到缓存
export const setToken = (token) =>{
  if(token){
    sessionStorage.setItem('token',JSON.stringify(token));
  }
};

//从缓存获取token
export const getAccessToken = () =>{
  let token = sessionStorage.getItem('token');
  return token?JSON.parse(token).access_token:null;
};
export const getToken = () =>{
  let token = sessionStorage.getItem('token');
  return token?JSON.parse(token):null;
};
