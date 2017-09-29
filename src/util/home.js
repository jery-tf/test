/**
 * Created by wyg on 2017/9/29.
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

/********************************************************************/

//设置页面标题
export const setTitle = title =>{
  document.title = title;
};

//设置Home默认页面
export const setHomePageUrl = str =>{
  if(str){
    sessionStorage.setItem('homePage',checkHomeUrl(str));
  }else{
    sessionStorage.setItem('homePage','wd');
  }
};
//获取Home页面
export const getHomePageUrl = () =>{
  let pageUrl = sessionStorage.getItem('homePage');
  if(!pageUrl){
    return 'wd';
  }
  return pageUrl;
};
