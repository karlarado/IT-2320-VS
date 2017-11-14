var Main = {};

Main.Canvas = document.getElementById('myCanvas');
Main.Context = Main.Canvas.getContext('2d');
Main.MX = 0;
Main.MY = 0;

Main.Canvas.onmousemove = function (event) {
    if (event.offsetX) {
        mouseX = event.offsetX;
        mouseY = event.offsetY;
    }
    else if (event.layerX) {
        mouseX = event.layerX;
        mouseY = event.layerY;
    }

    Main.MX = mouseX;
    Main.MY = mouseY;
}

Main.Animate = function ()
{
    requestAnimFrame(function () { Main.Animate(); });
}

window.requestAnimFrame = (function(callback)
{
    return window.requestAnimationFrame
	|| window.webkitRequestAnimationFrame
	|| window.mozRequestAnimationFrame
	|| window.oRequestAnimationFrame
	|| window.msRequestAnimationFrame
	|| function(callback) { window.setTimeout(callback, 1000 / 60); };
})();

$(document).ready(function () {
    Main.Animate();
});