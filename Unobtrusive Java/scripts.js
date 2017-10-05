window.onload = function Load()

{

    var listHover = document.getElementsByClassName("listObject");

    for (var i = 0; i < listHover.length; i++) {
        listHover[i].addEventListener("mouseover", MouseOverListItem);
        listHover[i].addEventListener("mouseout", MouseOutListItem);
    }

    var backgroundButton = document.getElementsByClassName("topButton");
    backgroundButton = addEventListener("click", backgroundColor)

}

    // mouseover color change

    function MouseOverListItem(li) {
        this.className = "blue";
    }

    function MouseOutListItem(li) {
        this.className = "listObject";
    }


    // onclick picture border color change

    function pictureBorderChange(div) {

        div.style.borderColor = "blue";

    }

    // click on button to change background color

    function backgroundColor(button) {
        document.body.style.backgroundColor = "pink";
    }
