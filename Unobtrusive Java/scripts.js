window.onload = function Load(){

    var listHover = document.getElementsByClassName("listObject");

    for (var i = 0; i < listHover.length; i++) {
        listHover[i].addEventListener("mouseover", MouseOverListItem);
       // listHover[i].addEventListener("mouseout", MouseOutListItem);
    }

    var colorButton = document.getElementsByClassName("topButton")[0];
    colorButton.addEventListener("click", backgroundColor)

    var picBorder = document.getElementsByClassName("hair-pic");
    picBorder.addEventListener("click", picBorderChange)
}

    // mouseover color change

    function MouseOverListItem(li) {
        this.className = "li-hilight";
    }

    function MouseOutListItem(li) {
        this.className = "listObject";
    }

    function picBorderChange(div) {

        div.style.borderColor = "blue";

    }

    // click on button to change background color

    function backgroundColor(div) {
        document.body.style.backgroundColor = "pink";
    }
