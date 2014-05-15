	// function to assign color properties to page elements
	function assignColor(divname, colorName){
		// assign page elements to var
		var cname = document.getElementById(divname.id+'c');
		var jname = document.getElementById(divname.id+'j');
		var ename = document.getElementById(divname.id+'e');
		var link = document.getElementById(divname.id+'a');
		var colorCode = cmap[colorName].o;
		
		// assign color properties to page elements
		cname.innerHTML = cmap[colorName].c;
		jname.innerHTML = cmap[colorName].j;
		ename.innerHTML = cmap[colorName].e;
		divname.style.backgroundColor = colorCode;
		if (cmap[colorName].f == 'b'){
			divname.style.color = "#FFFFFF";
		} else {
			divname.style.color = "#000000";
		}
		link.title = colorCode.toUpperCase() + ": " + cname.innerHTML +"色";
		link.href = "img/" + colorName + ".jpg";
	}

	// hash table for color properties
	var cmap = new Object();
		cmap.grapeRat = new Object();
		cmap.grapeRat.c = "葡萄鼠";
		cmap.grapeRat.j = "ぶどうねずみ";
		cmap.grapeRat.e = "Grape<br>Rat";
		cmap.grapeRat.o = "#705b67";
		cmap.grapeRat.f = "b";
		
		cmap.lightSakura = new Object();
		cmap.lightSakura.c = "薄桜";
		cmap.lightSakura.j = "うすざくら";
		cmap.lightSakura.e = "Light<br>Sakura";
		cmap.lightSakura.o = "#fdeff2";
		cmap.lightSakura.f = "w";	

		cmap.moeYellow = new Object();
		cmap.moeYellow.c = "萌黄";
		cmap.moeYellow.j = "もえぎ";
		cmap.moeYellow.e = "Moe<br>Yellow";
		cmap.moeYellow.o = "#aacf53";
		cmap.moeYellow.f = "w";	

	
	assignColor(c11, "grapeRat");
	assignColor(c12, "lightSakura");
	assignColor(c13, "moeYellow");


