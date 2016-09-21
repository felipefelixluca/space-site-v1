//shuffle

jQuery.fn.extend({

	shuffleEffect: function(duration) {

		if(duration == null) duration = 50;
		var arrLetter = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"];
		var $this = jQuery(this);
		var strDefault = $this.text();
		var nLength = strDefault.length - 1;
		var i = 0;
		var strText = "";
		var tid = setInterval(function() {
			if(i < nLength+1){
				var strShuffle = "";
				for(var j=0; j<nLength-i; j++){
					strShuffle += arrLetter[Math.floor(Math.random() * arrLetter.length)];
				}
				strText += strDefault.charAt(i);
				$this.css({display:"block"}).text(strText + strShuffle);
				i++;
			} else {
				clearInterval(tid);
			}
		}, duration);

	}

});

//dots generator

(function ($) {
    "use strict";
    $.fn.generateBackground = function (options) {

        var settings = $.extend({
            circleSize : 5,
            circlesHigh: 5,
            circlesWide: 5,
            circlePadding: 50
        }, options);

        return this.each(function () {
            var $this = $(this),
                width = (settings.circleSize + settings.circlePadding) * settings.circlesWide,
                height = (settings.circleSize + settings.circlePadding) * settings.circlesHigh,
                radius = settings.circleSize / 2,
                background = "<svg xmlns='http://www.w3.org/2000/svg' width='" + width + "' height='" + height + "'>",
                color = "#333",
                x,
                y;

            for (x = radius; x < width; x += settings.circleSize + settings.circlePadding) {
                for (y = radius; y < height; y += settings.circleSize + settings.circlePadding) {
                    background += "<circle fill='" + color + "' cx='" + x + "' cy='" + y + "' r='" + radius + "'/>";
                }
            }

            background += "</svg>";

            var b64 = 'data:image/svg+xml;base64,' + window.btoa(background),
                url = 'url("' + b64 + '")';
            $this.css('backgroundImage', url);

        });
    };
}(jQuery));

$('#play').generateBackground();

//scroll

$(function() {
		  $('a[href*="#"]:not([href="#"])').click(function() {
		    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		      var target = $(this.hash);
		      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		      if (target.length) {
		        $('html, body').animate({
		          scrollTop: target.offset().top
		        }, 1000);
		        return false;
		      }
		    }
		  });
		});