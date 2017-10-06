window.onload = function Load(){

    var listHover = document.getElementsByClassName("listObject");

    for (var i = 0; i < listHover.length; i++) {
        listHover[i].addEventListener("mouseover", MouseOverListItem);
    }

    var colorButton = document.getElementsByClassName("topButton")[0];
    colorButton.addEventListener("click", backgroundColor)

    var picBorder = document.getElementsByClassName("hair-pic");

    for (var j = 0; j < picBorder.length; j++) {
        picBorder[j].addEventListener("click", picBorderChange)
    }
}

    // mouseover color change

    function MouseOverListItem(li) {
        alert();

    }

    // click on images to change border color

    function picBorderChange(div) {

        if (this.className == "hair-pic") {

            this.style.borderColor = "#0000ff";
        }

        else {

            this.className = "hair-pic";
        }

    }

    // click on button to change background color

    function backgroundColor(div) {
        document.body.style.backgroundColor = "pink";
    }
