(function () {
	var hasAccepted = false;
	function check_geolocation(location) {
		var geoCheck = document.getElementById("geo_check");
		var geoStatus = document.getElementById("geo_status");
		if (location) { 
			geoStatus.innerHTML += "PASS";
			var coords = location.coords;
			geo_check.innerHTML += "Coords:" + "<br />"
			geo_check.innerHTML += "Latitude: " + coords.latitude + "<br />"
			geo_check.innerHTML += "Longitude: " + coords.longitude + "<br />"
			geo_check.innerHTML += "Altitude: " + coords.altitude + "<br />"
			geo_check.innerHTML += "Accuracy: " + coords.accuracy + "<br />"
			geo_check.innerHTML += "Altitude Accuracy: " + coords.altitudeAccuracy + "<br />"
			geo_check.innerHTML += "Heading: " + coords.heading + "<br />"
			geo_check.innerHTML += "Speed: " + coords.speed + "<br />"
		}else{
			geoStatus.innerHTML += "FAIL";
			geo_check.innerHTML += "Geolocation not supported."
		}	
	//code for google map
	//mapsurl = "http://maps.google.com/maps?f=q&source=s_q&hl=en&q=" + coords.latitude + ",+" + coords.longitude;
	//d.innerHTML += "<iframe name=map src=" + mapsurl + " width=80% height=80%></iframe>"
	}
	
	function successCallback(position) {
		check_geolocation(position);
	}
	
	function accept() {
		hasAccepted = true;
	}
	
	navigator.geolocation.getCurrentPosition(successCallback, null, null);
	setTimeout(accept, 50);
        
})();
