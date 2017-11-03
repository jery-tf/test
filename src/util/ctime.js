// export const getLocalStorage = (name) => {
//   if (name) {
//     let data = localStorage.getItem(name);
//     if (data) {
//       return JSON.parse(data);
//     }
//     return null;
//   }
//   return null;
// };

export const ctime = (nowtime) => {
  var oDate = new Date(nowtime),
    oYear = oDate.getFullYear(),
    oMonth = oDate.getMonth() + 1,
    oDay = oDate.getDate(),
    oHour = oDate.getHours(),
    oMin = oDate.getMinutes(),
    oSen = oDate.getSeconds(),
    oTime = oYear + '-' + oMonth + '-' + oDay + ' ' + oHour+ ':' + oMin + ':' + oSen;//最后拼接时间
  return oTime;
}
