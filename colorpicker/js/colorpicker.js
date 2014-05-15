	// hash table for color properties
	var cmap = new Object();
	cmap.c11c = "葡萄鼠";
	cmap.c11j = "ぶどうねずみ";
	cmap.c11e = "Grape Rat";
	cmap.c11o = "#705b67";
	cmap.c11f = "0";
	

	// function to assign color properties to page elements
	function assignColor(divname){
		// assign page fields to var
		var cname = document.getElementById(divname.id+'c');
		var jname = document.getElementById(divname.id+'j');
		var ename = document.getElementById(divname.id+'e');
		var colorCode = cmap[divname.id+'o'];
		
		// assign color properties to page fields
		cname.innerHTML = cmap[cname.id];
		jname.innerHTML = cmap[jname.id];
		ename.innerHTML = cmap[ename.id];
		divname.style.backgroundColor = colorCode;
		if (cmap[divname.id+'f'] != 0){
			divname.style.color = "#000000";
		} else {
			divname.style.color = "#FFFFFF";
		}
		
	}
	
	assignColor(c11);


