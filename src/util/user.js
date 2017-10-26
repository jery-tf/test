/**
 * Created by wyg on 2017/9/29.
 */


//从缓存获取用户信息
export const getUserInfo = ()=>{
  let userInfo = localStorage.getItem('userInfo');
  return userInfo?JSON.parse(userInfo):null;
};

//设置用户信息到缓存
export const setUserInfo = (userInfo)=>{
  if(userInfo){
    localStorage.setItem('userInfo',JSON.stringify(userInfo));
  }
};

//从缓存获取用户信息
export const getUserDetails = ()=>{
  let userDetails = localStorage.getItem('userDetails');
  return userDetails?JSON.parse(userDetails):null;
};

//设置用户信息到缓存
export const setUserDetails = (userDetails)=>{
  if(userDetails){
    localStorage.setItem('userDetails',JSON.stringify(userDetails));
  }
};

//从缓存获取用户信息
export const getUserAllInfo = ()=>{
  let userInfo = localStorage.getItem('userDetails');
  let userDetails = localStorage.getItem('userDetails');
  if(userInfo && userDetails){
    return Object.assign({},JSON.parse(userInfo),JSON.parse(userDetails));
  }
  return null;
};
