    function blinkLastDateSpan() {
        try {
	        if ($("#lastDateBlinker").css("visibility").toUpperCase() == "HIDDEN") {
	            $("#lastDateBlinker").css("visibility", "visible");



	            setTimeout(blinkLastDateSpan, 1000);
	        } else {
	            $("#lastDateBlinker").css("visibility", "hidden");
	            setTimeout(blinkLastDateSpan, 1000);
	        }
    
	       }
    
	       catch(err) {

	       }
    }

    blinkLastDateSpan();




	function changeColor(selector, colors, time) {
	        /* Params:
	         * selector: string,
	         * colors: array of color strings,
	         * every: integer (in mili-seconds)
	         */
	        var curCol = 0,
	            timer = setInterval(function () {
	                if (curCol === colors.length) curCol = 0;
	                $(selector).css("color", colors[curCol]);
	                curCol++;
	            }, time);
	    }

	        changeColor("#hangman", ['#ffff00','#ff0000','#00ff00','#0033ff','#cc00ff','#9900ff'], 2000);

