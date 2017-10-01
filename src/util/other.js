/**
 * Created by wyg on 2017/10/1.
 */

//往 sessionStorage 里面存对象
export const setSessionStorage = (name,value)=>{
  if(value){
    let data = JSON.stringify(value);
    sessionStorage.setItem(name,data);
    return true
  }
  return false
};

//从 sessionStorage 取数据
export const getSessionStorage = (name)=>{
  if(name){
    let data = sessionStorage.getItem(name);
    if(data){
      return JSON.parse(data);
    }
    return null;
  }
  return null;
};

