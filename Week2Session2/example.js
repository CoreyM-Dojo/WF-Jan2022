// Syntax

// Strings
console.log("My name is Corey Mckeel")
// Strings are indicated by quotation marks around words or numbers

// "Corey"
// "10" THIS IS A STRING

// Numbers (integers)
// Numbers or Integers are indicated as numerical values

// 10 

// Boolean

// Backbone of programming
// true or false (lowercase)
// Everything in JS has a true or false value except undefined

// "String" -> true
// "" -> true
// 1 -> true
// 0 -> false


// Variables

// Use var to declare a variable
var name = "Corey"; // String
var age = 28;       // Integer
var isTired = false // Boolean
var array = [] 
var obj = {} 

// Once a variable has been declare, you no longer need the var keyword to reassign it

name = "Jacob";
// age = 22;
isTired = true;
array = [1,"Peanuts",3,true];
obj = {
    name: name,
    age: age,
    isTired: isTired,
    array:array
};

console.log(obj)

// Operators
    /* 
    Plus
        - Can be used to add numbers together
        - Can be used to combine strings (Concatenation)
    */ 

    // Plus
    var a, // you can also declare multiple variables by separating them with commas
        b
    
    a = 5
    b = 10
    console.log(a+b); // Adding numbers

    var starter = "My name is "
    name = "Corey"
    console.log(a + b);

    // Interpolation
    // ${}
    // var c = `${starter}${name} and I am ${age} years old`
    // var c = starter + name + " and I am " + age + " years old";
    // console.log(c)


// Arrays
    // console.log(array)
    // [1,2,3,4] -> [(index 0)(index 1)(index 2)(index 3)]
    // Access a specific index with the number surrounded in []

    a = array[3] // This will set the variable a equal to the first value in the array
    console.log(a)

// Loops

// for
    // starting point
    // condition
    // increment value

// while
    // condition

// Functions
    // function keyword
    // identifier (name for function)
    // ()
    // logic
    // parameters
    // Arguments

    function add(a, b) {
        console.log(a + b);
    }

    add(10, 12);
    add(10, 20);
    add(5, 12);
    add(1, 12);


