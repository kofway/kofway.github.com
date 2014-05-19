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
		//divname.style.backgroundColor = colorCode;

		// manipulating css statement: 
		// background: url('img/irojiten/colors/orchidPink_c.jpg') center center;
		// only display the middle of image
		var attr = "background: url('img/irojiten/colors/" + colorName + "_c.jpg') center center; background-size: 140% 140%";
		divname.setAttribute("style", attr);
		if (cmap[colorName].f == 'b'){
			divname.style.color = "#000000";
		} else {
			divname.style.color = "#FFFFFF";
		}
		link.title = jname.innerHTML;
		link.href = "img/irojiten/colors/" + colorName + "_c.jpg";
	}

	// hash table for color properties
	// removed .o since we are using background image instead
	var cmap = new Object();

		cmap.orchidPink = new Object();
		cmap.orchidPink.c = " ";
		cmap.orchidPink.j = "薄紅";
		cmap.orchidPink.e = "<br>Orchid<br>Pink";
		cmap.orchidPink.f = "w";
		
		cmap.coralPink = new Object();
		cmap.coralPink.c = " ";
		cmap.coralPink.j = "珊瑚";
		cmap.coralPink.e = "<br>Coral<br>Pink";
		cmap.coralPink.f = "w";

		cmap.shellPink = new Object();
		cmap.shellPink.c = " ";
		cmap.shellPink.j = "桜贝";
		cmap.shellPink.e = "<br>Shell<br>Pink";
		cmap.shellPink.f = "w";
		
		cmap.narcissus = new Object();
		cmap.narcissus.c = " ";
		cmap.narcissus.j = "水仙";
		cmap.narcissus.e = "<br>Narcissus";
		cmap.narcissus.f = "w";	
		
		cmap.lettuceGreen = new Object();
		cmap.lettuceGreen.c = " ";
		cmap.lettuceGreen.j = "若菜色";
		cmap.lettuceGreen.e = "<br>Lettuce<br>Green";
		cmap.lettuceGreen.f = "w";	

		cmap.iceGreen = new Object();
		cmap.iceGreen.c = " ";
		cmap.iceGreen.j = "薄淺蔥";
		cmap.iceGreen.e = "<br>Ice<br>Green";
		cmap.iceGreen.f = "w";		

		cmap.aqua = new Object();
		cmap.aqua.c = " ";
		cmap.aqua.j = "アクア";
		cmap.aqua.e = "<br>Aqua";
		cmap.aqua.f = "w";	

		cmap.forgetMeNotBlue = new Object();
		cmap.forgetMeNotBlue.c = " ";
		cmap.forgetMeNotBlue.j = "忘れな草";
		cmap.forgetMeNotBlue.e = "<br>Forget<br>Me Not";
		cmap.forgetMeNotBlue.f = "w";	

		cmap.lilac = new Object();
		cmap.lilac.c = " ";
		cmap.lilac.j = "ライラック";
		cmap.lilac.e = "<br>Lilac";
		cmap.lilac.f = "w";	
		
		cmap.pigeonGrey = new Object();
		cmap.pigeonGrey.c = " ";
		cmap.pigeonGrey.j = "鳩羽色";
		cmap.pigeonGrey.e = "<br>Pigeon<br>Grey";
		cmap.pigeonGrey.f = "w";	

		cmap.cherryRed = new Object();
		cmap.cherryRed.c = " ";
		cmap.cherryRed.j = "チェリー";
		cmap.cherryRed.e = "<br>Cherry<br>Red";
		cmap.cherryRed.f = "w";	

		cmap.tangerineOrange = new Object();
		cmap.tangerineOrange.c = " ";
		cmap.tangerineOrange.j = "蜜柑色";
		cmap.tangerineOrange.e = "<br>Tangerine<br>Orange";
		cmap.tangerineOrange.f = "w";	

		cmap.dandelion = new Object();
		cmap.dandelion.c = " ";
		cmap.dandelion.j = "蒲公英";
		cmap.dandelion.e = "<br>Dandelion";
		cmap.dandelion.f = "w";	
		
		cmap.chartreuseGreen = new Object();
		cmap.chartreuseGreen.c = " ";
		cmap.chartreuseGreen.j = "シャルトルーズ緑";
		cmap.chartreuseGreen.e = "Chartreuse<br>Green";
		cmap.chartreuseGreen.f = "w";			
		
		cmap.parrotGreen = new Object();
		cmap.parrotGreen.c = " ";
		cmap.parrotGreen.j = "鸚鵡緑";
		cmap.parrotGreen.e = "<br>Parrot<br>Green";
		cmap.parrotGreen.f = "w";			
		
		cmap.peacockBlue = new Object();
		cmap.peacockBlue.c = " ";
		cmap.peacockBlue.j = "孔雀青";
		cmap.peacockBlue.e = "<br>Peacock<br>Blue";
		cmap.peacockBlue.f = "w";			
		
		cmap.kingFisher = new Object();
		cmap.kingFisher.c = " ";
		cmap.kingFisher.j = "川蝉色";
		cmap.kingFisher.e = "<br>Kingfisher";
		cmap.kingFisher.f = "w";			
		
		cmap.lapisLazuli = new Object();
		cmap.lapisLazuli.c = " ";
		cmap.lapisLazuli.j = "瑠璃色";
		cmap.lapisLazuli.e = "<br>Lapis<br>Lazuli";
		cmap.lapisLazuli.f = "w";	

		cmap.irisViolet = new Object();
		cmap.irisViolet.c = " ";
		cmap.irisViolet.j = "菖蒲色";
		cmap.irisViolet.e = "<br>Iris<br>Violet";
		cmap.irisViolet.f = "w";	
		
		cmap.crimson = new Object();
		cmap.crimson.c = " ";
		cmap.crimson.j = "洋紅";
		cmap.crimson.e = "<br>Crimson<br>Red";
		cmap.crimson.f = "w";	

		cmap.chestnutBrown = new Object();
		cmap.chestnutBrown.c = " ";
		cmap.chestnutBrown.j = "栗色";
		cmap.chestnutBrown.e = "<br>Chestnut<br>Brown";
		cmap.chestnutBrown.f = "w";	

		cmap.autumnLeaf = new Object();
		cmap.autumnLeaf.c = " ";
		cmap.autumnLeaf.j = "枯葉色";
		cmap.autumnLeaf.e = "<br>Autumn<br>Leaf";
		cmap.autumnLeaf.f = "w";		
		
		cmap.mapleSugar = new Object();
		cmap.mapleSugar.c = " ";
		cmap.mapleSugar.j = "銀煤竹";
		cmap.mapleSugar.e = "<br>Maple<br>Sugar";
		cmap.mapleSugar.f = "w";			
		
		cmap.oliveYellow = new Object();
		cmap.oliveYellow.c = " ";
		cmap.oliveYellow.j = "オリーブイエロー";
		cmap.oliveYellow.e = "<br>Olive<br>Yellow";
		cmap.oliveYellow.f = "w";			
		
		cmap.elmGreen = new Object();
		cmap.elmGreen.c = " ";
		cmap.elmGreen.j = "エルム緑";
		cmap.elmGreen.e = "<br>Elm<br>Green";
		cmap.elmGreen.f = "w";			
		
		cmap.forestGreen = new Object();
		cmap.forestGreen.c = " ";
		cmap.forestGreen.j = "千歲緑";
		cmap.forestGreen.e = "<br>Forest<br>Green";
		cmap.forestGreen.f = "w";			
		
		cmap.midnightBlue = new Object();
		cmap.midnightBlue.c = " ";
		cmap.midnightBlue.j = "青褐";
		cmap.midnightBlue.e = "<br>Midnight<br>Blue";
		cmap.midnightBlue.f = "w";		
		
		cmap.mulberry = new Object();
		cmap.mulberry.c = " ";
		cmap.mulberry.j = "紫根";
		cmap.mulberry.e = "<br>Mulberry";
		cmap.mulberry.f = "w";	
		
		cmap.taupe = new Object();
		cmap.taupe.c = " ";
		cmap.taupe.j = "土龍色";
		cmap.taupe.e = "<br>Taupe";
		cmap.taupe.f = "w";	

		cmap.ivoryBlack = new Object();
		cmap.ivoryBlack.c = " ";
		cmap.ivoryBlack.j = "象牙黑";
		cmap.ivoryBlack.e = "<br>Ivory<br>Black";
		cmap.ivoryBlack.f = "w";			
		
	assignColor(c1, "orchidPink");
	assignColor(c2, "coralPink");
	assignColor(c3, "shellPink");
	assignColor(c4, "narcissus");
	assignColor(c5, "lettuceGreen");
	assignColor(c6, "iceGreen");
	assignColor(c7, "aqua");
	assignColor(c8, "forgetMeNotBlue");
	assignColor(c9, "lilac");
	assignColor(c10, "pigeonGrey");
	assignColor(c11, "cherryRed");
	assignColor(c12, "tangerineOrange");
	assignColor(c13, "dandelion");
	assignColor(c14, "chartreuseGreen");
	assignColor(c15, "parrotGreen");
	assignColor(c16, "peacockBlue");
	assignColor(c17, "kingFisher");
	assignColor(c18, "lapisLazuli");
	assignColor(c19, "irisViolet");
	assignColor(c20, "ivoryBlack");
	assignColor(c21, "crimson");
	assignColor(c22, "chestnutBrown");
	assignColor(c23, "autumnLeaf");
	assignColor(c24, "mapleSugar");
	assignColor(c25, "oliveYellow");
	assignColor(c26, "elmGreen");
	assignColor(c27, "forestGreen");
	assignColor(c28, "midnightBlue");
	assignColor(c29, "mulberry");
	assignColor(c30, "taupe");
																											