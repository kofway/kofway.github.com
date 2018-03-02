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
		//divname.style.backgroundColor = colorCode;
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
		cmap.crayon.c = "<br>蜡笔";
		cmap.crayon.j = "クレヨン";
		cmap.crayon.e = "Crayon<br>Colors";
		cmap.crayon.o = "#FFFFFF";
		cmap.crayon.f = "w";

		cmap.irojiten = new Object();
		cmap.irojiten.c = "<br>色词典";
		cmap.irojiten.j = "色詞典";
		cmap.irojiten.e = "Irojiten<br>Colors";
		cmap.irojiten.o = "#FFFFFF";
		cmap.irojiten.f = "w";

		cmap.brand = new Object();
		cmap.brand.c = "<br>品牌";
		cmap.brand.j = "ブランド";
		cmap.brand.e = "Brand<br>Names";
		cmap.brand.o = "#FFFFFF";
		cmap.brand.f = "w";	
		
	assignColor(c1, "crayon");
	assignColor(c2, "irojiten");
	assignColor(c3, "brand");

