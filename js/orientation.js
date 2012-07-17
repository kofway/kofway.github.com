(function () {
alert("Screen orientation state is " + screen.orientation);
	var v = $("#phone"); 
	var scale, angle;
	var classSet = false;
	window.addEventListener("deviceorientation", function(e) {
	if (!classSet) {
		document.body.classList.add("orientation");
		classSet = true;
	}
	angle = e.gamma + "deg"; scale = (e.beta + 30) / 60;
	}, true);
	
	window.setInterval(function() {
		v.style.MozTransform = "rotate(" + angle + ") scale(" + scale + ")";
	}, 100);

})();