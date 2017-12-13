/**
 * Created by asus on 2017/12/6.
 */
import $axios from './axiosSetting';
import util from '@/util'

export const _axios = (url,params) => {
  return $axios.get(`${url}?data=${JSON.stringify(util.user.reqParms(params))}`)
};
