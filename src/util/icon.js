/**
 * Created by wyg on 2017/10/24.
 */

const iconNames = ['xndt_01','xndt_02','xndt_03','xndt_04','xndt_05','xndt_06','xndt_07','xndt_08','xndt_09','xndt_10','xndt_11','xndt_12','xndt_13','xndt_14','xndt_15','xndt_16','xndt_17','xndt_18','xndt_19','xndt_20'
  ,'xndt_21','xndt_22','xndt_23','xndt_24','xndt_25','xndt_26','xndt_27','xndt_28','xndt_29','xndt_30','xndt_31','xndt_32','xndt_33','xndt_34','xndt_35','xndt_36','xndt_37','xndt_38','xndt_39','xndt_40'
  ,'xndt_41','xndt_42','xndt_43','xndt_44','xndt_45','xndt_46','xndt_47','xndt_48','xndt_49','xndt_50','xndt_51','xndt_52','xndt_53','xndt_54','xndt_55','xndt_56'];

const hashCode = (str)=>{
  var hash = 0;
  if (str.length == 0) return hash;
  for (i = 0; i < str.length; i++) {
    let char = str.charCodeAt(i);
    hash = ((hash<<5)-hash)+char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
};

export default (seed)=>{
  if(!seed) seed = '';
  let index = hashCode(seed + '') % iconNames.length;
  if(isNaN(index)){
    return null;
  }else{
    return list[hashCode(seed + '') % iconNames.length];
  }
}
