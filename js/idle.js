(function () {
	var idleStatus = document.getElementById("idle_status");
	var idleCheck = document.getElementById("idle_check");
	var idle = navigator.addIdleObserver;
	
    function idleHandler() {
    	idleCheck.innerHTML = "Idle";
    }

    function activeHandler() {
    	idleCheck.innerHTML = "Active";
    }
        
    if (idle){
        idleStatus.innerHTML = "PASS";
    }else{
	    idleStatus.innerHTML = "FAIL";
    }
    
    navigator.addIdleObserver({ time: 4, onidle: idleHandler, onactive: activeHandler });

})();