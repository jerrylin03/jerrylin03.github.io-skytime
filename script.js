function time(){
	var t = new Date();
	var h = t.getHours();
	var m = t.getMinutes();
	var s = t.getSeconds();
	document.getElementById("text").innerHTML = h + ":" + m + ":" + s;
	setInterval(time, 500);
	
}