function vibeCheck() {
    var tired = document.querySelector("#tired");
    console.log(tired)
    if (tired.innerText == "No") {
        tired.innerText = "Yes";
    } else {
        tired.innerText = "No"; 
    }
}

function hide(element) {
    element.style.display = "none";
}