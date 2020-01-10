var gettime = function(stamp,way){
	var datetime = new Date();
	datetime.setTime(stamp);
	var Y = datetime.getFullYear(); //获取传入时间戳的年
	var M = (datetime.getMonth()+1)<10 ? "0"+(datetime.getMonth()+1) : (datetime.getMonth()+1) //获取月份
	var D = datetime.getDate()<10 ? "0"+datetime.getDate() : datetime.getDate() //获取当前天
	var h = datetime.getHours()<10 ? "0"+datetime.getHours() : datetime.getHours() //小时
	var m = datetime.getMinutes()<10 ? "0"+datetime.getMinutes() : datetime.getMinutes() //分钟
	var s = datetime.getSeconds()<10 ? "0"+datetime.getSeconds() : datetime.getSeconds() //秒
	way=way.indexOf('Y')>-1?way.replace('Y',Y):way;
	way=way.indexOf('M')>-1?way.replace('M',M):way;
	way=way.indexOf('D')>-1?way.replace('D',D):way;
	way=way.indexOf('h')>-1?way.replace('h',h):way;
	way=way.indexOf('m')>-1?way.replace('m',m):way;
	way=way.indexOf('s')>-1?way.replace('s',s):way;
	return way;
	//使用替换检查字符串是否具有该元素，有了替换
}
module.exports={
	gettime
}