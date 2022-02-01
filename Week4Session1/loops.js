// Create an array of food to display in a loop

// ###### FOR loop ######
var arr = ["steak", "potatoes", "chicken", "corn", "cheese"]

// go through each item in the array and display it in the console

for (var i = 0; i < arr.length; i++) {
    // console.log(arr[i]);

    if (arr[i] == "chicken" ) {
        console.log("iTS CHICKEN!!!")
        continue
    } 
    else if (arr[i].startsWith("c")) {
        console.log("I 'c' it");
        break
    } else {
        console.log(arr[i])
    }
}

// var i = 0;

// while (true) {
    
//     // Do stuff

//     // If a certain condition is met - ex: player dies
//     break
// }


