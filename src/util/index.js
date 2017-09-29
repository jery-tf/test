/**
 * Created by wyg on 2017/9/21.
 */

/***
 * 检查首页地址是否合法 不合法默认 我的  内部方法
 * @param str
 * @returns {*}
 */
const checkHomeUrl = str =>{
  let strArr = ['bs','bm','gk','wd'];//办事 便民 公开 我的
  for(let i in strArr){
    if(strArr[i] == str){
      return str;
    }
  }
  return 'wd';
};


/*********************home************************************/

//设置页面标题
const setTitle = title =>{
  document.title = title;
};

//设置Home默认页面
const setHomePageUrl = str =>{
  if(str){
    sessionStorage.setItem('homePage',checkHomeUrl(str));
  }else{
    sessionStorage.setItem('homePage','wd');
  }
};
//获取Home页面
const getHomePageUrl = () =>{
  let pageUrl = sessionStorage.getItem('homePage');
  if(!pageUrl){
    return 'wd';
  }
  return pageUrl;
};

/*******************login*************************/

//设置token到缓存
const setToken = (token) =>{
  if(token){
    sessionStorage.setItem('token',JSON.stringify(token));
  }
};

//从缓存获取token
const getAccessToken = () =>{
  let token = sessionStorage.getItem('token');
  return token?JSON.parse(token).access_token:null;
};
const getToken = () =>{
  let token = sessionStorage.getItem('token');
  return token?JSON.parse(token):null;
};

export default {
  setTitle,setHomePageUrl,getHomePageUrl,setToken,getToken,getAccessToken
}
