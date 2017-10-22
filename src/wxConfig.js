/**
 * Created by wyg on 2017/10/16.
 */
// 微信配置项
const appId = 'wx8e71a9b682c5a8fe';
import Api from './api'

export default {
  init(){
    // console.log('执行微信初始化...');
    // Api.wechatApi.getWechatJSSDKParams({clientUrl:location.href.split('#')[0]}).then(res=>{
    //   console.log('微信->',res);
    //   wx.config({
    //     debug: true,
    //     appId: appId,
    //     timestamp:res.timestamp,
    //     nonceStr:res.nonceStr,
    //     signature:res.signature,
    //     jsApiList:['chooseImage']
    //   })
    // })
  }
}
