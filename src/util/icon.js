/**
 * Created by wyg on 2017/10/24.
 */

import {hashCode} from './cache'

const iconNames = ['C2-yonghu','C2-richengbiao','C2-orders','C2-yonghuzu','C2-shezhi',
  'C2-shijian','C2-yonghuming','C2-gongwenbao','C2-youjian','C2-gongwenbao1','C2-qiyeyonghu',
  'C2-bangongyongpin','C2-02xingzhengbangong'
];
const iconBackground= ['#f15a4a','#fc992c','#108ee9','#29ab91'];

export const getValueBySeed = (seed)=>{
  if(!seed) seed = '';
  let index = hashCode(seed + '') % iconNames.length;
  if(isNaN(index)){
    return null;
  }else{
    return iconNames[index];
  }
}

export const getstr =(str)=>{
  str = str.substr(0,20)
  return str
}

//随机授权事项背景颜色
export const getBgcBySeed = (seed)=>{
  if(!seed) seed = '';
  let index = hashCode(seed + '') % iconBackground.length;
  if(isNaN(index)){
    return null;
  }else{
    return iconBackground[index];
  }
}
