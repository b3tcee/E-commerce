// let a = 0;
// const b = 2;

// a += 3;
// b += 5;
// console.log(a, b)



// console.log(str+num)

// function () {
//     return a++;
// }


//global scope
let plus = document.querySelector(".quantity__plus"),
    minus = document.querySelector(".quantity__minus"),
    qty = new Number(document.querySelector(".quantity__number").value);

const add = () => {
    if (qty <= 9 ) {
        qty += 1
    } else {
        alert("You can only buy 10 units of this product");
    }

    qty_new = new String(qty);
    document.querySelector(".quantity__number").value = qty_new;
    // console.log(qty)
}

const subtract = () => {
    if (qty <= 9 && qty >= 1){
        qty -= 1
    } 

    qty_new = new String(qty);
    document.querySelector(".quantity__number").value = qty_new;
    // console.log(qty) 
}

// ================= JavaScript Data Types =================== //
// String 
let my_string = " ";
let myString = '';

// Number 
let num = 10;

// Boolean = true, false
// Object
const ball = { 
    color: "red",  //key-value
    size: 30,
    rolling: function () {
        console.log("I am rolling");
    }
}

// Array
let myList = [235, -9, "8.9", 34]

// Function

let car; //undefined
// let number = null

let number = "90"
number.concat(3) // explicit concatenation

let first_name = "Anthonia",
    last_name = "Asikpo"
    full_name = first_name + " " + last_name; // implicit concatenation

console.log(`My name is ${full_name}`)

let content = document.querySelector(".content__description")
console.log(content.innerText.length)

// content.innerHTML = "This is the next text"


// DOM Manipulation

// ========= JAVSCRIPT OUTPUT

// Writing into an HTML element, using innerHTML.
// Template String ES6: ${}

let price = 245;
document.querySelector(".price__new").innerHTML = "$" + price + ".00";
document.querySelector(".price__old").innerHTML = `$ ${price * 2}`;

// Writing into the HTML output using document.write().
// document.write("This is a simple ecommerce website")


// Writing into an alert box, using window.alert().
function writing() {
    window.alert("Testing the alert function")
    
    // methods
}

// writing()

// Writing into the browser console, using console.log()
window.onload = console.log("Hello world")
// console.error("Type Error: var forty is undefined")
// console.warn("This is a JavaScript warning")
// console.info("Here is some information about this project")


// JavaScript Literals
"This is a string"
908.8
76
["yet", 89, {}]
const person = {
    name: "Valerie",
    age: 50,
}
const run = () => {
    console.info("Hey, I am running")
} 

// JavaScript Expressions
5 * 6
function writeMyName (name) {
    let writeName = "I am writing my name:" + name;
    return writeName;
}

let A_$people_9 = 9

let nine_people = 9
let ninePeople = 9
let NINEPEOPLE = 9

// camelCase
// pascal_camel


/* BUILDING BLOCKS OF PROGRAMMING LANGUAGES */
// ===== EXPRESSIONS
// Operator Classifications
// 1. Unary Operators
// 2. Binary Operators

2 ** 5;
34 / 2;

// 3. Tenary Operators

let value1 = 5
value1 == 5 ? console.log("value1 is 5") : alert("Go type a new value");

// 4. Arithmetic Operators
// 5. Relational Operators
// 6. Logical Operators

let person_age = input("Type in your age: ");

function checkAge (person_age) {
    if (person_age >= 18 && person_age <= 50)  {
        console.log("You can join")
    } else if (person_age < 18) {
        console.warn("You are too young")
    } else {
        console.warn("You are too old")
    }
}

checkAge()


// ===== STATEMENTS & STATEMENT BLOCKS
// Statement blocks group statements together so they act like a single statement 
const searchLocation = () => {
    console.log("Searching...")
}

// LOOPS

// for loop
let fruits = ["apple", "pineapple", "banana", "grape", "orange"]
// ========= [0, 1, 2, 3, 4]
for (let i = 0; i <= 4; i++) {
    // fruits[2] //banana
    console.log(fruits[i])
}

// for/in
// for/of

// while
let i = 0;
while (i < 10) {
    let text = "The number is " + i;
    console.log(text)
    i++;
}

// do/while
do {
    //
} while (i < 10){
    // location.reload;
}


// object.addEventListener("mouseover", myScript);