/**
 * Created by wyg on 2017/10/9.
 */
//收藏api
import {axiosPostToken} from './baseApi'

//获取事项收藏
export const getMatterCollection = (params,loading)=>axiosPostToken(`xndt/v1/collectionquery`,params,loading);
