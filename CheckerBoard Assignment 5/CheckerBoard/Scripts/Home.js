$(document).ready(function ()
{
    var cells = $(".cell");
    var colorCount = 0;

    for (var i = 0; i < cells.length; i++)
    {
        var cell = $(cells[i]);
        var isDark = colorCount % 2 == 0;
        var isNextRow = (i + 1) % 8 == 0;
        colorCount += isNextRow ? 2 : 1;
        cell.css("background-color", isDark ? "navy" : "white");
    }

    var holding = false;

    $(".piece").click(function () {
        if (holding == false) {
            if ($(this).hasClass("red") || $(this).hasClass("black")) {
                $(this).css("border", "1px solid yellow");
                holding = true;
            }
        }
        if (holding == true) {
            
        }
    }
     );
    

});