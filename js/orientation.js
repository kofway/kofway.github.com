(function () {
	var oriStatus = document.getElementById("ori_status");
	var orientation = screen.mozOrientation;
	var oriDisplay = document.getElementById("ori_display");
	
    function show() {
    	if(orientation){
    		oriDisplay.innerHTML = orientation;
    		oristatus.innerHTML = "PASS";
      	}else{
	      	oriDisplay.innerHTML = "Not Supported";
    		oristatus.innerHTML = "FAIL";
      	}
    }
    screen.addEventListener("mozorientationchange", show, false);
    show();

})();