/**
 * Created by wyg on 2017/9/29.
 */
import {setSessionStorage,getSessionStorage} from './other'
//内部方法
const isLogin = ()=>{
  let token = getToken();
  return !!token;
};


/********************************************************/

//设置token到缓存
export const setToken = (token) =>{
  if(token){
    setSessionStorage('token',token);
  }
};

//从缓存获取token
export const getAccessToken = () =>{
  let token = getSessionStorage('token');
  return token?token.access_token:null;
};
export const getToken = () =>{
  let token = getSessionStorage('token');
  return token?token:null;
};

//登录拦截器
export const checkLogin = (to,from,next)=>{
  if(isLogin()){
    next();
  }else{
    if(to.fullPath.split('/').length<=2){
      next({path:`/me/userLogin${to.fullPath}`});
    }else{
      let arr = to.fullPath.split('/');
      arr.shift();
      next({path:`/me/userLogin/${arr.join('-')}`});
    }
  }
};
