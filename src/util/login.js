/**
 * Created by wyg on 2017/9/29.
 */
import {getUserInfo} from './user'

//内部方法
const isLogin = ()=>{
  let token = getToken();
  return !!token;
};


/********************************************************/

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

//登录拦截器
export const checkLogin = (to,from,next)=>{
  if(isLogin()){
    next();
  }else{
    next({path:`/me/userLogin/${to.name}`});
  }
};
