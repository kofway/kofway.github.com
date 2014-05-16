	// function to assign catagory properties to page elements
	function assignColor(divname, colorName){
		// assign page elements to var
		var cname = document.getElementById(divname.id+'c');
		var jname = document.getElementById(divname.id+'j');
		var ename = document.getElementById(divname.id+'e');
		var link = document.getElementById(divname.id+'a');
		var colorCode = cmap[colorName].o;
		
		// assign catagory properties to page elements
		cname.innerHTML = cmap[colorName].c;
		jname.innerHTML = cmap[colorName].j;
		ename.innerHTML = cmap[colorName].e;
		divname.style.backgroundColor = colorCode;
		if (cmap[colorName].f == 'b'){
			divname.style.color = "#000000";
		} else {
			divname.style.color = "#FFFFFF";
		}
		//link.title = colorCode.toUpperCase() + ": " + cname.innerHTML +"色";
		//link.href = "img/" + colorName + ".jpg";
	}

	// hash table for catagory properties
	var cmap = new Object();
		cmap.crayon = new Object();
		cmap.crayon.c = "蜡笔";
		cmap.crayon.j = "クレヨン";
		cmap.crayon.e = "Crayon<br>Colors";
		cmap.crayon.o = "#FFFFFF";
		cmap.crayon.f = "b";


	
	assignColor(c1, "crayon");



