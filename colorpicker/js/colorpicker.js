
    var c11c = document.getElementById("c11c");
	var c11j = document.getElementById("c11j");
	var c11e = document.getElementById("c11e");
	var c11d = document.getElementById("c11d");
	
	
	var cmap = new Object();
	cmap.c11c = "葡萄鼠";
	cmap.c11j = "ぶどうねずみ";
	
	function assignColor(cname, jname, ename, divname){
		window.alert(c11d.childNodes[0].hasChildNodes());
		cname.innerHTML = cmap['c11c'];
		jname.innerHTML="ぶどうねずみ";
		ename.innerHTML="Grape Rat";
		divname.style.backgroundColor="#705b67";
		divname.style.color="#ffffff";
	}
	
	assignColor(c11c, c11j, c11e, c11d);

