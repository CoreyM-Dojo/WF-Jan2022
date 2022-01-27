console.log("connecting to js")

function favConsole(element) {
    console.log(element)
    alert(`Your favorite console is ${element.value}`)
}

function changeColor(element, color) {

    // You could use the THIS keyword in this case
    console.log(element)
    element.style.color = color

    // Another way to grab the element
    // var text = document.getElementById("bold-title");
    // text.style.color = color;
}

// document.querySelector("div.container p")

