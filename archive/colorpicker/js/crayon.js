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
		link.href = "img/crayon/" + colorName + "_c.JPG";
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

		cmap.ripeMango = new Object();
		cmap.ripeMango.c = "芒果";
		cmap.ripeMango.j = "マンゴー";
		cmap.ripeMango.e = "<br>Mango";
		cmap.ripeMango.o = "#FF8243";
		cmap.ripeMango.f = "w";
	
		cmap.lemonYellow = new Object();
		cmap.lemonYellow.c = "柠檬黄";
		cmap.lemonYellow.j = "レモン";
		cmap.lemonYellow.e = "Lemon<br>Yellow";
		cmap.lemonYellow.o = "#FFF44F";
		cmap.lemonYellow.f = "b";

		cmap.canaryYellow = new Object();
		cmap.canaryYellow.c = "金丝雀";
		cmap.canaryYellow.j = "カナリア";
		cmap.canaryYellow.e = "Canary<br>Yellow";
		cmap.canaryYellow.o = "#FFFF99";
		cmap.canaryYellow.f = "b";

		cmap.tangerineOrange = new Object();
		cmap.tangerineOrange.c = "橘子";
		cmap.tangerineOrange.j = "タンジェリン";
		cmap.tangerineOrange.e = "Tangerine<br>Orange";
		cmap.tangerineOrange.o = "#FFA474";
		cmap.tangerineOrange.f = "w";

		cmap.inchworm = new Object();
		cmap.inchworm.c = "尺蠖";
		cmap.inchworm.j = "尺取り虫";
		cmap.inchworm.e = "<br>Inchworm";
		cmap.inchworm.o = "#B2EC5D";
		cmap.inchworm.f = "w";
		
		cmap.grannyApple = new Object();
		cmap.grannyApple.c = "澳洲青苹果";
		cmap.grannyApple.j = "グラニースミス";
		cmap.grannyApple.e = "Apple";
		cmap.grannyApple.o = "#A8E4A0";
		cmap.grannyApple.f = "w";
	
		cmap.plum = new Object();
		cmap.plum.c = "李子";
		cmap.plum.j = "梅";
		cmap.plum.e = "Vivid<br>Plum";
		cmap.plum.o = "#8E4585";
		cmap.plum.f = "w";	
		
		cmap.denim = new Object();
		cmap.denim.c = "牛仔";
		cmap.denim.j = "デニム";
		cmap.denim.e = "<br>Denim";
		cmap.denim.o = "#2B6CC4";
		cmap.denim.f = "w";	
		
		cmap.cerise = new Object();
		cmap.cerise.c = "樱桃";
		cmap.cerise.j = "サクランボ";
		cmap.cerise.e = "Cerise<br>Red";
		cmap.cerise.o = "#DD4492";
		cmap.cerise.f = "w";	

		cmap.indigo = new Object();
		cmap.indigo.c = "靛青";
		cmap.indigo.j = "インディゴ";
		cmap.indigo.e = "<br>Indigo";
		cmap.indigo.o = "#5D76CB";
		cmap.indigo.f = "w";			
		
	assignColor(c1, "violetRed");
	assignColor(c2, "brickRed");
	assignColor(c3, "burntSienna");
	assignColor(c4, "ripeMango");
	assignColor(c5, "tangerineOrange");
	assignColor(c6, "yellowOrange");
	assignColor(c7, "sunGlow");
	assignColor(c8, "lemonYellow");
	assignColor(c9, "canaryYellow");
	assignColor(c10, "yellowGreen");
	assignColor(c11, "inchworm");
	assignColor(c12, "grannyApple");
	assignColor(c13, "caribbeanGreen");
	assignColor(c14, "skyBlue");
	assignColor(c15, "denim");
	assignColor(c16, "indigo");
	assignColor(c17, "plum");
	assignColor(c18, "cerise");