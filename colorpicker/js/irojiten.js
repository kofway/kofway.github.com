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
		// background: #eee url('img/irojiten/colors/orchidPink_c.jpg') center center;
		// only display the middle of image
		divname.setAttribute("style", "background: url('img/irojiten/colors/orchidPink_c.jpg') center center; background-size: 120% 120%");
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
/* 	assignColor(c11, "shellPink");
	assignColor(c12, "shellPink");
	assignColor(c13, "shellPink");
	assignColor(c14, "shellPink");
	assignColor(c15, "shellPink");
	assignColor(c16, "shellPink");
	assignColor(c17, "shellPink");
	assignColor(c18, "shellPink");
	assignColor(c19, "shellPink");
	assignColor(c20, "shellPink");
	assignColor(c21, "shellPink");
	assignColor(c22, "shellPink");
	assignColor(c23, "shellPink");
	assignColor(c24, "shellPink");
	assignColor(c25, "shellPink");
	assignColor(c26, "shellPink");
	assignColor(c27, "shellPink");
	assignColor(c28, "shellPink");
	assignColor(c29, "shellPink");
	assignColor(c30, "shellPink"); */
																											