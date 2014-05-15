//(function () {

    var c11c = document.getElementById("c11c");
	//c11c.innerHTML="葡萄鼠";
	
	var c11j = document.getElementById("c11j");
	//c11j.innerHTML="ぶどうねずみ";

	var c11e = document.getElementById("c11e");
	//c11e.innerHTML="Grape Rat";
	
	var c11d = document.getElementById("c11d");
	//c11d.style.backgroundColor="#705b67";
	//c11d.style.color="#ffffff"; //TODO: add conditional change based on color
	
	function assignColor(cname, jname, ename, divname){
		cname.innerHTML="葡萄鼠";
		jname.innerHTML="ぶどうねずみ";
		ename.innerHTML="Grape Rat";
		divname.style.backgroundColor="#705b67";
		divname.style.color="#ffffff";
	}
	
	assignColor(c11c, c11j, c11e, c11d);
//})();