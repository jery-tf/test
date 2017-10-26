/**
 * Created by wyg on 2017/10/24.
 */

import {hashCode} from './cache'

const iconNames = ['icon-yonghu','icon-richengbiao','icon-orders','icon-yonghuzu','icon-shezhi',
  'icon-shijian','icon-yonghuming','icon-gongwenbao','icon-youjian','icon-gongwenbao1','icon-qiyeyonghu',
  'icon-bangongyongpin','icon-02xingzhengbangong'
];

export const getValueBySeed = (seed)=>{
  if(!seed) seed = '';
  let index = hashCode(seed + '') % iconNames.length;
  if(isNaN(index)){
    return null;
  }else{
    return iconNames[index];
  }
}
