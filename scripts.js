// mouse over text color change

function MouseOverListItem(li) {
    li.className = "li-highlight";
}


// mouse out to change text to normal

function MouseOutListItem(li) {
    li.className = "";
}


// onclick picture border color change

function pictureBorderChange(div) {
    /*document.getElementsByClassName("hair-pic")[0].style.borderColor = "blue"; 

    this only highlights the first object in the array, which is useful but not what I wanted.
    */

    div.style.borderColor = "blue";
 
}

// onclick button to change background color

function myFunction(button) {
    document.body.style.backgroundColor = "pink";
}
