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
		cmap.cocacola.p1 = "140%";
		cmap.cocacola.p2 = "140%";
			
		cmap.disney = new Object();
		cmap.disney.e = "Disney";
		cmap.disney.p1 = "130%";
		cmap.disney.p2 = "180%";
	
		cmap.firefox = new Object();
		cmap.firefox.e = "Firefox";
		cmap.firefox.p1 = "140%";
		cmap.firefox.p2 = "140%";

		cmap.facebook = new Object();
		cmap.facebook.e = "Facebook";
		cmap.facebook.p1 = "110%";
		cmap.facebook.p2 = "110%";
	
		cmap.snidel = new Object();
		cmap.snidel.e = "snidel";
		cmap.snidel.p1 = "110%";
		cmap.snidel.p2 = "110%";

		cmap.appleSilver = new Object();
		cmap.appleSilver.e = "Apple";
		cmap.appleSilver.p1 = "100%";
		cmap.appleSilver.p2 = "100%";

		cmap.tiffany = new Object();
		cmap.tiffany.e = "Tiffany & Co";
		cmap.tiffany.p1 = "100%";
		cmap.tiffany.p2 = "100%";

		cmap.hmh = new Object();
		cmap.hmh.e = "HONEY MI HONEY";
		cmap.hmh.p1 = "120%";
		cmap.hmh.p2 = "80%";

		cmap.melonSoda = new Object();
		cmap.melonSoda.e = "メロンソーダ";
		cmap.melonSoda.p1 = "100%";
		cmap.melonSoda.p2 = "130%";

		cmap.calpico = new Object();
		cmap.calpico.e = "カルピス";
		cmap.calpico.p1 = "115%";
		cmap.calpico.p2 = "100%";

		cmap.bigCamera = new Object();
		cmap.bigCamera.e = "ビックカメラ";
		cmap.bigCamera.p1 = "100%";
		cmap.bigCamera.p2 = "100%";

		cmap.starbucks = new Object();
		cmap.starbucks.e = "Starbucks";
		cmap.starbucks.p1 = "130%";
		cmap.starbucks.p2 = "130%";

		cmap.android = new Object();
		cmap.android.e = "Android";
		cmap.android.p1 = "110%";
		cmap.android.p2 = "110%";



		
	assignColor(c1, "cocacola");
	assignColor(c2, "bigCamera");
	assignColor(c3, "facebook");
	assignColor(c4, "starbucks");
	assignColor(c5, "disney");
	assignColor(c6, "hmh");
	assignColor(c7, "tiffany");
	assignColor(c8, "appleSilver");
	assignColor(c9, "snidel");
	assignColor(c10, "calpico");
	assignColor(c11, "android");
	assignColor(c12, "firefox");

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
																											