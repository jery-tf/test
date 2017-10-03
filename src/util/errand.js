/**
 * Created by wyg on 2017/10/2.
 */
import Config from '../config'

export const getErrandClassName = (id)=>{
  return Config.Dictionaries[id];
}
