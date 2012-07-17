(function () {
    document.querySelector("#install_button").addEventListener("click", function () {
		var request = navigator.mozApps.install("http://kofway.github.com/");  
		var installStatus = document.getElementById("install_status"),
	    request.onsuccess = function() {  
		    installStatus.innerHTML = "PASS";
	    }  
	    request.onerror = function() {  
	     	installStatus.innerHTML = "FAIL";
	    }      
    }, false);

})();