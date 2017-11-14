var Main = {};

Main.Canvas = document.getElementById('myCanvas');
Main.Context = Main.Canvas.getContext('2d');
Main.MX = 0;
Main.MY = 0;
Main.BoxWidth = 75;
Main.BoxHeight = 75;
Main.CarouselY = 400;
Main.MousePressed = false;
Main.BoxPressed = false;

Main.Box = function (x, y, w, h) {
    this.X = x;
    this.Y = y;
    this.Width = w;
    this.Height = h;

    this.draw = function ()
    {
        Main.checkForPressedBox(this.X, (this.X + 75));

        if (Main.BoxPressed == true)
        {
            Main.Context.fillStyle = "#FFFF00";
        }
        else
        {
            Main.Context.fillStyle = "#FF0000";
        }

        this.X = this.X + 3;

        if (this.X > 600)
        {
            this.X = 0;
        }

     
        Main.Context.fillRect(this.X, this.Y, this.Height, this.Width);
    }
}

Main.Boxes = [
	new Main.Box(0, Main.CarouselY, Main.BoxWidth, Main.BoxHeight),
	new Main.Box(95, Main.CarouselY, Main.BoxWidth, Main.BoxHeight),
	new Main.Box(190, Main.CarouselY, Main.BoxWidth, Main.BoxHeight)
];

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

Main.MouseUp = function (mouseEvent) {
    Main.MousePressed = false;
}

Main.MouseDown = function (mouseEvent) {
    Main.MousePressed = true;
}

Main.checkForPressedBox = function (x, x75)
{
    if (Main.MX > x && Main.MX < x75 && Main.MY > 400 && Main.MY < 475) {
        Main.BoxPressed = true;
    }
    else
    {
        Main.BoxPressed = false;
    }
        

}

Main.Animate = function ()
{
    Main.Context.clearRect(0, 0, Main.Canvas.width, Main.Canvas.height);

    for (var i = 0; i < Main.Boxes.length; i++) {
        Main.Boxes[i].draw();
    }

    Main.Context.font = "30px Arial";
    Main.Context.fillText("X: " + Main.MX + "  Y: " + Main.MY, 60, 60);

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