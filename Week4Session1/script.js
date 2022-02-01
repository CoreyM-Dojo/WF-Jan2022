var fandoms = document.querySelectorAll(".like");
// var spans = document.querySelectorAll("span")
console.log(fandoms)
// console.log(fandoms[0].firstChild)

function handleClick(e) {
    // console.log(e)
    e.target.firstElementChild.innerText++
}

for (var i = 0; i < fandoms.length; i++) {
    fandoms[i].addEventListener("click", handleClick, false);
}

