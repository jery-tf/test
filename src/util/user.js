/**
 * Created by wyg on 2017/9/29.
 */


//从缓存获取用户信息
export const getUserInfo = ()=>{
  let userInfo = sessionStorage.getItem('userInfo');
  return userInfo?JSON.parse(userInfo):null;
};

//设置用户信息到缓存
export const setUserInfo = (userInfo)=>{
  if(userInfo){
    sessionStorage.setItem('userInfo',JSON.stringify(userInfo));
  }
};
