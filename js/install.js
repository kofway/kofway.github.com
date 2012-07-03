(function () {
    document.querySelector("#install_button").addEventListener("click", function () {
		var request = navigator.mozApps.install("http://kofway.github.com/");  
	    request.onsuccess = function() {  
	      // great - display a message, or redirect to a launch page  
	    }  
	    request.onerror = function() {  
	      // whoops - this.error.name has details  
	    }      
    }, false);

})();