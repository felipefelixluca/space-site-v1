/*jslint bitwise: true */
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