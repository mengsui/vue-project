// 修改(start.getMonth() + 1) > 10 为 (start.getMonth() + 1) >= 10 
function formatDate(val) {
  // 格式化时间xxxx-xx-xx
  let start = new Date(val)
  let y = start.getFullYear()
  let m = (start.getMonth() + 1) >= 10 ? (start.getMonth() + 1) : '0' + (start.getMonth() + 1)
  let d = start.getDate() >= 10 ? start.getDate() : '0' + start.getDate()
  return y + '-' + m + '-' + d
}

// 格式化为年
function formatDateYear(val) {
  // 格式化时间xxxx-xx-xx
  let start = new Date(val)
  let y = start.getFullYear()

  return y + '年'
}


function formatYearMonth1(n) {
  let date = new Date(n);
  let Y = date.getFullYear();
  let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
  let D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  return Y + "." + M
}

function datetimes(n) {
  let date = new Date(n);
  let Y = date.getFullYear();
  let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
  let D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  return Y + "." + M + "." + D
}

function datetimes2(n) {
  let date = new Date(n);
  let Y = date.getFullYear();
  let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
  let D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  let h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  let m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  return Y + "." + M + "." + D + " " + h + ":" + m + ":" + s
}
function datetimesPorintYMDHM(n) {
  let date = new Date(n);
  let Y = date.getFullYear();
  let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
  let D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  let h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  let m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  return Y + "." + M + "." + D + " " + h + ":" + m 
}
function datetimesLine(n) {
  let date = new Date(n);
  let Y = date.getFullYear();
  let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
  let D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  let h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  let m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  return Y + "-" + M + "-" + D + " " + h + ":" + m + ":" + s
}

function datetimes3(n) {
  let date = new Date(n);
  let Y = date.getFullYear();
  let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
  let D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  return Y + "." + M + "." + D + "  " + h + ":" + m
}

function datetimes4(n) {
  let date = new Date(n);
  let Y = date.getFullYear();
  let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
  let D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  let h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  let m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  return  M + "月" + D + "日 " + h + ":" + m
}
function datetimes6(n) {
  let date = new Date(n);
  let nowDate = new Date();
  let nowY = nowDate.getFullYear();
  let Y = date.getFullYear();
  let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
  let D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  let h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  let m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  if (Y < nowY) {
    return Y + "-" + M + "-" + D + " " + h + ":" + m + ":" + s
  } else {
    return M + "-" + D + " " + h + ":" + m + ":" + s
  }

}

// 格式化为  2018年11月20日
function yearMothDay(n){
  let date = new Date(n);
  let Y = date.getFullYear();
  let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
  let D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();

  return Y+"年"+M + "月" + D + "日 "
}


function dateContent(time){
  let oldData = new Date(time).getTime();; //过去时间戳 
  let newData = new Date().getTime(); //当前时间戳
  let s = (newData - oldData) / 1000; // 毫秒转秒
  let d = parseInt(s / 86400); //有多少天   1天
  s = s % 86400; //除去整天 剩下的秒数
  let h = parseInt(s / 3600); //小时   1小时
  s = s % 3600;
  let min = parseInt(s / 60); //分钟 1分钟
  let S = s % 60; //36秒
  let data_time=null;

  if (d >= 0 && d < 1) { //一天内
    if (h >= 0 && h < 1) {
      data_time = min + '分钟前';
     
      if (min > 0) {
        data_time = min + '分钟前';
       
      } else {
         data_time = '刚刚';
       
      }
    } else if (h >= 1 && h < 2) {
       data_time = h + '时' + min + '分钟前';
     
    } else {
       data_time = h + '小时前';
      
    }

  } else if (d >= 1 && d <= 30) { //一月内

     data_time = d + '天前';
  
  } else {
    data_time = '1个月前';
    
  }
  return data_time;

}




function mistiming(sDate1, sDate2) {
  // 计算开始和结束的时间差
  let aDate, oDate1, oDate2, iDays
  aDate = sDate1.split('-')
  oDate1 = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0])
  aDate = sDate2.split('-')
  oDate2 = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0])
  iDays = parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24)
  return iDays + 1
}

function countDate(start, end) {
  // 判断开始和结束之间的时间差是否在90天内
  let days = mistiming(start, end)
  let stateT = days > 90 ? Boolean(0) : Boolean(1)
  return {
    state: stateT,
    day: days
  }
}
function timeForMat(count) {
  // 拼接时间
  let time1 = new Date()
  time1.setTime(time1.getTime())
  let Y1 = time1.getFullYear()
  let M1 = ((time1.getMonth() + 1) >= 10 ? (time1.getMonth() + 1) : '0' + (time1.getMonth() + 1))
  let D1 = (time1.getDate() >= 10 ? time1.getDate() : '0' + time1.getDate())
  let timer1 = Y1 + '-' + M1 + '-' + D1 // 当前时间
  let time2 = new Date()
  time2.setTime(time2.getTime() - (24 * 60 * 60 * 1000 * (count - 1)))
  let Y2 = time2.getFullYear()
  let M2 = ((time2.getMonth() + 1) >= 10 ? (time2.getMonth() + 1) : '0' + (time2.getMonth() + 1))
  let D2 = (time2.getDate() >= 10 ? time2.getDate() : '0' + time2.getDate())
  let timer2 = Y2 + '-' + M2 + '-' + D2 // 之前的7天或者30天
  return {
    t1: timer1,
    t2: timer2
  }
}
// 格式化时间 count为天数，返回count天后的时间，包括当前时间（t1为当前时间，t2为count天后的时间）
function timeForMatAdd(count) {
  // 拼接时间
  let time1 = new Date()
  time1.setTime(time1.getTime())
  let Y1 = time1.getFullYear()
  let M1 = ((time1.getMonth() + 1) >= 10 ? (time1.getMonth() + 1) : '0' + (time1.getMonth() + 1))
  let D1 = (time1.getDate() >= 10 ? time1.getDate() : '0' + time1.getDate());
  let H1 = (time1.getHours() >= 10 ? time1.getHours() : '0' + time1.getHours());
  let Min1 = (time1.getMinutes() >= 10 ? time1.getMinutes() : '0' + time1.getMinutes());
  let S1 = (time1.getSeconds() >= 10 ? time1.getSeconds() : '0' + time1.getSeconds());
  let timer1 = Y1 + '-' + M1 + '-' + D1 + " " + H1 + ":" + Min1 + ":" +S1// 当前时间
  let time2 = new Date()
  time2.setTime(time2.getTime() + (24 * 60 * 60 * 1000 * (count - 1)))
  let Y2 = time2.getFullYear()
  let M2 = ((time2.getMonth() + 1) >= 10 ? (time2.getMonth() + 1) : '0' + (time2.getMonth() + 1))
  let D2 = (time2.getDate() >= 10 ? time2.getDate() : '0' + time2.getDate());
  let H2 = (time2.getHours() >= 10 ? time2.getHours() : '0' + time2.getHours());
  let Min2 = (time2.getMinutes() >= 10 ? time2.getMinutes() : '0' + time2.getMinutes());
  let S2 = (time2.getSeconds() >= 10 ? time2.getSeconds() : '0' + time2.getSeconds());
  let timer2 = Y2 + '-' + M2 + '-' + D2 + " " + H2 + ":" + Min2 + ":" + S2 // 之前的7天或者30天
  return {
    t1: timer1,
    t2: timer2
  }
}

// 自定义时间 count为天数，返回count天后的时间，包括当前时间（t1为当前时间，t2为count天后的时间）
function customTimeForMatAdd(timeObj,count) {
  const { year, month, day, hour = 23, minutes = 59, seconds = 59 } = timeObj;
  // 拼接时间
  let time1 = new Date(year, month - 1, day, hour, minutes, seconds);
  time1.setTime(time1.getTime())
  let Y1 = time1.getFullYear()
  let M1 = ((time1.getMonth() + 1) >= 10 ? (time1.getMonth() + 1) : '0' + (time1.getMonth() + 1))
  let D1 = (time1.getDate() >= 10 ? time1.getDate() : '0' + time1.getDate());
  let H1 = (time1.getHours() >= 10 ? time1.getHours() : '0' + time1.getHours());
  let Min1 = (time1.getMinutes() >= 10 ? time1.getMinutes() : '0' + time1.getMinutes());
  let S1 = (time1.getSeconds() >= 10 ? time1.getSeconds() : '0' + time1.getSeconds());
  let timer1 = Y1 + '-' + M1 + '-' + D1 + " " + H1 + ":" + Min1 + ":" + S1// 当前时间
  let time2 = new Date()
  time2.setTime(time2.getTime() + (24 * 60 * 60 * 1000 * (count - 1)))
  let Y2 = time2.getFullYear()
  let M2 = ((time2.getMonth() + 1) >= 10 ? (time2.getMonth() + 1) : '0' + (time2.getMonth() + 1))
  let D2 = (time2.getDate() >= 10 ? time2.getDate() : '0' + time2.getDate());
  let H2 = (time2.getHours() >= 10 ? time2.getHours() : '0' + time2.getHours());
  let Min2 = (time2.getMinutes() >= 10 ? time2.getMinutes() : '0' + time2.getMinutes());
  let S2 = (time2.getSeconds() >= 10 ? time2.getSeconds() : '0' + time2.getSeconds());
  let timer2 = Y2 + '-' + M2 + '-' + D2 + " " + H2 + ":" + Min2 + ":" + S2 // 之前的7天或者30天
  return {
    t1: timer1,
    t2: timer2
  }
}

function yesterday(start, end) {
  // 校验是不是选择的昨天
  let timer = timeForMat(1)
  return timer
}

function sevenDays() {
  // 获取最近7天
  let timer = timeForMat(7)
  return timer
}

function thirtyDays() {
  // 获取最近30天
  let timer = timeForMat(30)
  return timer
}

// 保留两位小数（非强制）
function changeTwoDecimal(param) {
  var value = parseFloat(param);
  var value = Math.round(param * 100) / 100;
  return value;
}
// 保留两位小数（强制）
function changeTwoDecimal_f(x) {
  var f_x = parseFloat(x);
  var f_x = Math.round(x * 100) / 100;
  var s_x = f_x.toString();
  var pos_decimal = s_x.indexOf('.');
  if (pos_decimal < 0) {
    pos_decimal = s_x.length;
    s_x += '.';
  }
  while (s_x.length <= pos_decimal + 2) {
    s_x += '0';
  }
  return s_x;
}
// 是否是今天昨天
var judgeDay = (stamptime) => {
  let time = new Date(stamptime);
  let today = (new Date()).getDate();
  let d = time.getDate();
  // 是今天
  if (today == d){
    return 1

  // 昨天
  } else if (today == d + 1){
    return 2
  }else{
    return 0
  }
}


//将秒数转为 00:00格式；
const formatSeconds = (s) => {
  let str = ""
  if (s > 0) {
    const minutes = Math.floor(s / 60);
    const seconds = Math.floor(s - minutes * 60);
    let m_str = minutes < 10 ? "0" + minutes : minutes;
    let s_str = seconds < 10 ? "0" + seconds : seconds;
    str = m_str + ":" + s_str;
  }
  return str;
}


module.exports = {
  formatDate: formatDate,
  datetimes: datetimes,
  datetimes2: datetimes2,
  countDate: countDate,
  yesterday: yesterday,
  sevenDays: sevenDays,
  thirtyDays: thirtyDays,
  changeTwoDecimal: changeTwoDecimal,
  changeTwoDecimal_f: changeTwoDecimal_f,
  datetimes3: datetimes3,
  datetimes4: datetimes4,
  judgeDay: judgeDay,
  yearMothDay:yearMothDay,
  formatYearMonth1: formatYearMonth1,
  dateContent: dateContent,
  timeForMat:timeForMat,
  timeForMatAdd: timeForMatAdd,
  formatSeconds: formatSeconds,
  datetimesLine: datetimesLine,
  formatDateYear: formatDateYear,
  datetimesPorintYMDHM: datetimesPorintYMDHM,
  datetimes6:datetimes6,
  customTimeForMatAdd: customTimeForMatAdd,
}