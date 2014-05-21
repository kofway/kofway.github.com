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
		if (colorName == "tiffany"){
			link.href = "img/brand/tiffany.jpg";
		}else{
			link.href = "img/brand/" + colorName + ".jpg";
		}
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
		cmap.disney.p1 = "100%";
		cmap.disney.p2 = "100%";
	
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
		cmap.snidel.p1 = "80%";
		cmap.snidel.p2 = "60%";

		cmap.appleSilver = new Object();
		cmap.appleSilver.e = "Apple";
		cmap.appleSilver.p1 = "100%";
		cmap.appleSilver.p2 = "100%";

		cmap.tiffany = new Object();
		cmap.tiffany.e = "The Little Blue Box";
		cmap.tiffany.p1 = "110%";
		cmap.tiffany.p2 = "132%";

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

		cmap.kikkoman = new Object();
		cmap.kikkoman.e = "亀甲萬";
		cmap.kikkoman.p1 = "120%";
		cmap.kikkoman.p2 = "100%";

		cmap.cadbery = new Object();
		cmap.cadbery.e = "Cadbery";
		cmap.cadbery.p1 = "140%";
		cmap.cadbery.p2 = "110%";

		cmap.twitter = new Object();
		cmap.twitter.e = "Twitter";
		cmap.twitter.p1 = "150%";
		cmap.twitter.p2 = "100%";
		
		cmap.navitime = new Object();
		cmap.navitime.e = "Navitime";
		cmap.navitime.p1 = "100%";
		cmap.navitime.p2 = "100%";

		cmap.taiko = new Object();
		cmap.taiko.e = "太鼓の達人";
		cmap.taiko.p1 = "130%";
		cmap.taiko.p2 = "130%";

		cmap.deicy = new Object();
		cmap.deicy.e = "deicy";
		cmap.deicy.p1 = "150%";
		cmap.deicy.p2 = "100%";
		
		cmap.youtube = new Object();
		cmap.youtube.e = "YouTube";
		cmap.youtube.p1 = "110%";
		cmap.youtube.p2 = "110%";
		
		cmap.nageo = new Object();
		cmap.nageo.e = "National Geographic";
		cmap.nageo.p1 = "100%";
		cmap.nageo.p2 = "100%";
		
		cmap.mario = new Object();
		cmap.mario.e = "Super Mario Bros";
		cmap.mario.p1 = "120%";
		cmap.mario.p2 = "140%";

		cmap.warnerBros = new Object();
		cmap.warnerBros.e = "Warner Brothers";
		cmap.warnerBros.p1 = "100%";
		cmap.warnerBros.p2 = "110%";

		cmap.nihonU = new Object();
		cmap.nihonU.e = "日本大学";
		cmap.nihonU.p1 = "95%";
		cmap.nihonU.p2 = "100%";
		
	// removed: android melonSoda firefox cadbery calpico navitime kikkoman 
	assignColor(c1, "cocacola");
	assignColor(c2, "starbucks");
	assignColor(c3, "facebook");
	assignColor(c4, "twitter");
	assignColor(c5, "nageo");
	assignColor(c6, "youtube");
	assignColor(c7, "mario");
	assignColor(c8, "disney");
	assignColor(c9, "appleSilver");
	assignColor(c10, "warnerBros");
	assignColor(c11, "nihonU");
	assignColor(c12, "snidel");
	assignColor(c13, "deicy");
	assignColor(c14, "hmh");
	assignColor(c15, "tiffany");

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
																											