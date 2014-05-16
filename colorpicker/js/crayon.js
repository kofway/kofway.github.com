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
			divname.style.color = "#000000";
		} else {
			divname.style.color = "#FFFFFF";
		}
		link.title = colorCode.toUpperCase() + ": " + cname.innerHTML +"色";
		link.href = "img/crayon/" + colorName + ".jpg";
	}

	// hash table for color properties
	var cmap = new Object();
	/* Template
		cmap.colorName = new Object();
		cmap.colorName.c = "白";
		cmap.colorName.j = "白";
		cmap.colorName.e = "White";
		cmap.colorName.o = "#000000";
		cmap.colorName.f = "b";
	*/
		cmap.skyBlue = new Object();
		cmap.skyBlue.c = "天空蓝";
		cmap.skyBlue.j = "空色";
		cmap.skyBlue.e = "Sky<br>Blue";
		cmap.skyBlue.o = "#80DAEB";
		cmap.skyBlue.f = "w";
		
		cmap.yellowOrange = new Object();
		cmap.yellowOrange.c = "橙黄";
		cmap.yellowOrange.j = "橙黄";
		cmap.yellowOrange.e = "Yellow<br>Orange";
		cmap.yellowOrange.o = "#FFAE42";
		cmap.yellowOrange.f = "w";	

		cmap.yellowGreen = new Object();
		cmap.yellowGreen.c = "黄绿";
		cmap.yellowGreen.j = "黄緑";
		cmap.yellowGreen.e = "Yellow<br>Green";
		cmap.yellowGreen.o = "#C5E384";
		cmap.yellowGreen.f = "w";	
		
		cmap.caribbeanGreen = new Object();
		cmap.caribbeanGreen.c = "加勒比绿";
		cmap.caribbeanGreen.j = "カリビアン緑";
		cmap.caribbeanGreen.e = "Caribbean<br>Green";
		cmap.caribbeanGreen.o = "#00CC99";
		cmap.caribbeanGreen.f = "w";
		
		cmap.blizzardBlue = new Object();
		cmap.blizzardBlue.c = "暴雪蓝";
		cmap.blizzardBlue.j = "暴風雪青";
		cmap.blizzardBlue.e = "Blizzard<br>Blue";
		cmap.blizzardBlue.o = "#ACE5EE";
		cmap.blizzardBlue.f = "w";
		
		cmap.violetRed = new Object();
		cmap.violetRed.c = "紫红";
		cmap.violetRed.j = "紫赤";
		cmap.violetRed.e = "Violet<br>Red";
		cmap.violetRed.o = "#F75394";
		cmap.violetRed.f = "w";
		
		cmap.sunGlow = new Object();
		cmap.sunGlow.c = "阳光";
		cmap.sunGlow.j = "太陽の輝";
		cmap.sunGlow.e = "Sun<br>Glow";
		cmap.sunGlow.o = "#FFCF48";
		cmap.sunGlow.f = "w";

		cmap.brickRed = new Object();
		cmap.brickRed.c = "砖红";
		cmap.brickRed.j = "赤レンガ";
		cmap.brickRed.e = "Brick<br>Red";
		cmap.brickRed.o = "#CB4154";
		cmap.brickRed.f = "w";
		
		//81D8D0 tiff
		
		cmap.burntSienna = new Object();
		cmap.burntSienna.c = "赤褐";
		cmap.burntSienna.j = "赭";
		cmap.burntSienna.e = "Burnt<br>Sienna";
		cmap.burntSienna.o = "#EA7E5D";
		cmap.burntSienna.f = "w";

		cmap.ripeTango = new Object();
		cmap.ripeTango.c = "芒果";
		cmap.ripeTango.j = "マンゴー";
		cmap.ripeTango.e = "Ripe<br>Mango";
		cmap.ripeTango.o = "#FF8243";
		cmap.ripeTango.f = "w";
	
		cmap.lemonYellow = new Object();
		cmap.lemonYellow.c = "柠檬黄";
		cmap.lemonYellow.j = "レモン";
		cmap.lemonYellow.e = "Lemon<br>Yellow";
		cmap.lemonYellow.o = "#FFF44F";
		cmap.lemonYellow.f = "w";

		cmap.canaryYellow = new Object();
		cmap.canaryYellow.c = "金丝雀";
		cmap.canaryYellow.j = "カナリア";
		cmap.canaryYellow.e = "Canary<br>Yellow";
		cmap.canaryYellow.o = "#FFFF99";
		cmap.canaryYellow.f = "w";

		
	assignColor(c1, "violetRed");
	assignColor(c2, "brickRed");
	assignColor(c3, "burntSienna");
	assignColor(c4, "ripeTango");
	assignColor(c5, "yellowOrange");
	assignColor(c6, "sunGlow");
	assignColor(c7, "lemonYellow");
	assignColor(c8, "canaryYellow");
	assignColor(c9, "yellowGreen");
	assignColor(c10, "caribbeanGreen");
	assignColor(c11, "blizzardBlue");
	assignColor(c12, "skyBlue");
	assignColor(c13, "caribbeanGreen");
	assignColor(c14, "caribbeanGreen");
	assignColor(c15, "caribbeanGreen");
	assignColor(c16, "caribbeanGreen");
	assignColor(c17, "caribbeanGreen");
	assignColor(c18, "caribbeanGreen");