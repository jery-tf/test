//判断数据是否为空
import {Utf8ToUnicode} from './other'
import Api from '../api'
export const __isEmpty = (data) => {
  return !data || data.length == 0;
}

/**
 * 顺序批量执行异步操作 Promise
 * @param {*} list
 * @param {*} promiseBuilder
 */
export const __batchPromise=(list,promiseBuilder)=>{
  let _promises = [];
  if(!list || typeof list.forEach != 'function' || typeof promiseBuilder != 'function'){
    return new Promise((resolve,reject) => {
      resolve(list);
    });
  };
  list.forEach(ele=>{
    try{
      let _p = promiseBuilder(ele);
      _p && _promises.push(_p);
    }catch(e){console.log(e);}
  });
  return Promise.all(_promises);
}

/**
 *将子频道按照关系连接到父频道中
 * @param {*} pList 父级频道列表
 * @param {*} cList 子级频道列表，必须是一维数组
 */
export const __connectChildren=(pList,cList)=>{
  cList.forEach(c => {
    for(let p of pList){
      if(p.channelId == c.parentId){
        p.sub || (p.sub = []);
        p.sub.push(c);
        break;
      }
    }
  });
}

export const __extractSubIds=(subList)=>{
  let ret=[];
  if(!subList) return ret;
  subList.forEach(ele =>{
    if(ele && ele.parentId != undefined && ele.keywords == undefined){
      ret.push(ele.channelId);
    }
  });
  return ret;
}

export const __getCMSData=(response)=>{
  return (response ? response.data : {});
}

export const __adaptCMSChnLData=(list)=>{
  let ret=[]
  if(list){
    for(let l of list){
      let {parentId,channelId,createtime,name,orderNo,type} = l;
      if(createtime && createtime.time){
        createtime = new Date(createtime.time);
      }
      ret.push({parentId:parentId,channelId:channelId,createtime:createtime,name:name,orderNo:orderNo,type:type
        ,sub:[]});
    }
  }
  return ret;
}

/**
 * 取指定频道的子一级频道
 * @param {*} id 频道ID
 */
export const fetchSubChnl = (id)=>{
    id && (id = id+'');
    return  Api.opacityApi.forpeo(
      {
        content: btoa(Utf8ToUnicode(JSON.stringify({
          channelId:id,
          start: "0",
          count: "99",
          grantUserName: "xxld",
          userName: "xxld",
          site: "hunanzhengwu"
        })))
      },
      {headers: {'content-type': 'application/x-www-form-urlencoded'}}
    ).then(response =>{
        return __adaptCMSChnLData(__getCMSData(response));
    },e => {console.log(e);return null;});

}
/**
 * 取指定频道的子一级频道和文章，处理异常，异常时返回空。
 * @param {*} id 频道ID
 */
export const fetchSubChnlNArti = (id)=>{
  id && (id = id+'');
  return new Promise((resolve,reject)=>{
    //先查频道列表
    fetchSubChnl(id).then((list)=>{
      //再查文章列表
      Api.getnewsApi.getnewsinfo(
        {
          content: btoa(Utf8ToUnicode(JSON.stringify({
            channelId:id,
            start: "0",
            count: "99",
            grantUserName: "xxld",
            userName: "xxld",
            site: "hunanzhengwu"
          })))
        },
        {headers: {'content-type': 'application/x-www-form-urlencoded'}}
      ).then(response =>{
        let arts = __getCMSData(response);
        if(!__isEmpty(arts)){
          list = list.concat(arts.map(v =>{
            v.parentId = id;
            return v;
          }));
        }
        resolve(list);
      }).catch(e => {console.log(e);resolve(list)});
    }).catch(e => {console.log(e);resolve(null);});
  });
}

/**
 * 按照层级深度递归取指定频道的所有子频道
 * @param {*} startChnlId 开始频道ID
 * @param {*} recrusDepth 递归深度，如果查一级则传1，以此类推。
 */
export const fetchAllSubChnlNArti=(startChnlId,recrusDepth)=>{
  return fetchAllSub(startChnlId,recrusDepth,fetchSubChnlNArti);
}

/**
 * 按照层级深度递归取指定频道的所有子频道,如何取内容由传参决定
 * @param {*} startChnlId 开始频道ID
 * @param {*} recrusDepth 递归深度，如果查一级则传1，以此类推。
 * @param {*} promiseBuilder 各频道本级内容查询方法，负责。
 */
export const fetchAllSub=(startChnlId,recrusDepth,promiseBuilder)=>{
  if(typeof startChnlId == 'string') startChnlId=[startChnlId];
  if(recrusDepth == undefined || recrusDepth == null) recrusDepth = 30;
  if(recrusDepth || recrusDepth > 0 || startChnlId){
    return new Promise((resolve,reject) =>{
      __batchPromise(startChnlId,promiseBuilder).then((list) => {
        let subIds=[],ret=[];
        //降低结果数组维度，方便遍历
        ret = [].concat.apply([],list);
        subIds = __extractSubIds(ret);
        if(subIds.length > 0 && recrusDepth-1 > 0){
          fetchAllSub(subIds,recrusDepth-1,promiseBuilder).then((subList)=>{
            if(!__isEmpty(subList)){
              __connectChildren(ret,subList);
            }
            resolve(ret);
          }).catch(e => {debugger;resolve(null)});
        }else if(ret.length > 0){
          resolve(ret);
        }else{
          resolve(null);
        }
      }).catch(e => {debugger;resolve(null)});
    });
  }else{
    return new Promise((resolve,reject) => {
      resolve(null);
    });
  }
}

