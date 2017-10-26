/**
 * Created by wyg on 2017/10/25.
 */

import {axiosPost} from './baseApi'

//获取缓存数据接口
export const getCacheData = (url,params,config)=>axiosPost(url,params,config);
