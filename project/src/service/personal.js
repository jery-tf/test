/**
 * Created by asus on 2017/12/5.
 */
/*个人中心*/
import {_axios} from './baseApi';
/*
*
* 查询个人信息：
 http://localhost:8080/cn2401/logisticsForum/member/showMyInfo.do?data=
 {"body":{"memberId":"2"},
 "header":{"app_model":"OPPOR9sk","app_version":"1.3.4","token":"c5fe4daebf7d4df2a156ae7c50cb7de4","uuid":"2"}}
* */
//查询个人信息
export const getUserInfo = (params) =>_axios(`/logisticsForum/member/showMyInfo.do`,params);
