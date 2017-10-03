/**
 * Created by wyg on 2017/10/1.
 */

//往 sessionStorage 里面存对象
export const setSessionStorage = (name, value) => {
  if (value) {
    let data = JSON.stringify(value);
    sessionStorage.setItem(name, data);
    return true
  }
  return false
};

//从 sessionStorage 取数据
export const getSessionStorage = (name) => {
  if (name) {
    let data = sessionStorage.getItem(name);
    if (data) {
      return JSON.parse(data);
    }
    return null;
  }
  return null;
};


//转base64
export const toBase64 = (obj) => {
  let str = JSON.stringify(obj);
  return btoa(str);
}

//转GBK
export const Utf8ToUnicode = (strUtf8)=>{
  let bstr = "";
  let nTotalChars = strUtf8.length;
  let nOffset = 0;
  let nRemainingBytes = nTotalChars;
  let nOutputPosition = 0;
  let iCode, iCode1, iCode2;

  while (nOffset < nTotalChars) {
    iCode = strUtf8.charCodeAt(nOffset);
    if ((iCode & 0x80) == 0) {
      if (nRemainingBytes < 1)
        break;
      bstr += String.fromCharCode(iCode & 0x7F);
      nOffset++;
      nRemainingBytes -= 1;
    }
    else if ((iCode & 0xE0) == 0xC0)
    {
      iCode1 = strUtf8.charCodeAt(nOffset + 1);
      if (nRemainingBytes < 2 || (iCode1 & 0xC0) != 0x80){
        break;
      }
      bstr += String.fromCharCode(((iCode & 0x3F) << 6) | (iCode1 & 0x3F));
      nOffset += 2;
      nRemainingBytes -= 2;
    }
    else if ((iCode & 0xF0) == 0xE0){
      iCode1 = strUtf8.charCodeAt(nOffset + 1);
      iCode2 = strUtf8.charCodeAt(nOffset + 2);
      if (nRemainingBytes < 3 || (iCode1 & 0xC0) != 0x80 || (iCode2 & 0xC0) != 0x80){
        break;
      }
      bstr += String.fromCharCode(((iCode & 0x0F) << 12) | ((iCode1 & 0x3F) << 6) | (iCode2 & 0x3F));
      nOffset += 3;
      nRemainingBytes -= 3;
    }
    else
      break;
  }
  if (nRemainingBytes != 0) {
    return "";
  }

  return bstr;
};

//根据key获取字典
export const getDictionariesByKey = (key)=>{
  let dictionaries = getSessionStorage('dictionaries');
  if(dictionaries) {
    if (dictionaries[key]) {
      return dictionaries[key];
    }
    return false
  }
  return false
};

//设置字典
export const setDictionaries = (key,value)=>{
  let dictionaries = getSessionStorage('dictionaries');
  if(!dictionaries){
    dictionaries = {};
  }
  dictionaries[key] = value;
  setSessionStorage('dictionaries',dictionaries);
};
