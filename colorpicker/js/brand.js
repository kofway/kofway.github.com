	// function to assign color properties to page elements
	function assignColor(divname, colorName){
		// assign page elements to var
		var cname = document.getElementById(divname.id+'c');
		var jname = document.getElementById(divname.id+'j');
		var ename = document.getElementById(divname.id+'e');
		var link = document.getElementById(divname.id+'a');
		var colorCode = cmap[colorName].o;
		var p1 = cmap[colorName].p1;
		var p2 = cmap[colorName].p2;

		// assign color properties to page elements
		//cname.innerHTML = cmap[colorName].c;
		//jname.innerHTML = cmap[colorName].j;
		//ename.innerHTML = cmap[colorName].e;
		//divname.style.backgroundColor = colorCode;

		// manipulating css statement: 
		// background: url('img/irojiten/colors/orchidPink_c.jpg') center center;
		// only display the middle of image
		//var attr = "background: url('img/brand/" + colorName + ".jpg') center center; background-size: 80% 80%";
		var attr = "background: url('img/brand/" + colorName + ".jpg') center center; background-size: " + p1 + " " + p2;
		
		divname.setAttribute("style", attr);
		/* if (cmap[colorName].f == 'b'){
			divname.style.color = "#000000";
		} else {
			divname.style.color = "#FFFFFF";
		} */
		link.title = cmap[colorName].e;
		link.href = "img/brand/" + colorName + ".jpg";
	}

	// hash table for color properties
	// removed .o since we are using background image instead
	var cmap = new Object();

		cmap.cocacola = new Object();
		cmap.cocacola.e = "Coca Cola";
		cmap.cocacola.p1 = "150%";
		cmap.cocacola.p2 = "150%";
		cmap.cocacola.f = "w";
			
		cmap.disney = new Object();
		cmap.disney.e = "Disney";
		cmap.disney.p1 = "100%";
		cmap.disney.p2 = "90%";
		cmap.disney.f = "w";
		
	assignColor(c1, "cocacola");
	assignColor(c2, "disney");
	// assignColor(c3, "shellPink");
	// assignColor(c4, "narcissus");
	// assignColor(c5, "lettuceGreen");
	// assignColor(c6, "iceGreen");
	// assignColor(c7, "aqua");
	// assignColor(c8, "forgetMeNotBlue");
	// assignColor(c9, "lilac");
	// assignColor(c10, "pigeonGrey");
	// assignColor(c11, "cherryRed");
	// assignColor(c12, "tangerineOrange");
	// assignColor(c13, "dandelion");
	// assignColor(c14, "chartreuseGreen");
	// assignColor(c15, "parrotGreen");
	// assignColor(c16, "peacockBlue");
	// assignColor(c17, "kingFisher");
	// assignColor(c18, "lapisLazuli");
	// assignColor(c19, "irisViolet");
	// assignColor(c20, "ivoryBlack");
	// assignColor(c21, "crimson");
	// assignColor(c22, "chestnutBrown");
	// assignColor(c23, "autumnLeaf");
	// assignColor(c24, "mapleSugar");
	// assignColor(c25, "oliveYellow");
	// assignColor(c26, "elmGreen");
	// assignColor(c27, "forestGreen");
	// assignColor(c28, "midnightBlue");
	// assignColor(c29, "mulberry");
	// assignColor(c30, "taupe");
																											