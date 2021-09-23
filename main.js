document.body.style.backgroundColor = "yellow";
// first method
document.write("Our Home Page");
// second method
// alert('Welcome to the School of Scam');
// third method
console.log("they are bad people");
// how to comment
console.log("hello world"); //log into the console

// VARIABLES
/* KEY WORDS ARE    
1. Var 
2. let
3. const */
var firstName = "Mistura";
var lastName = "Mubarak";
var fullName = firstName + " " + lastName;
console.log(fullName);
var course, address, phoneNumber;
course = "javascript";
address = "1, banire close";
phoneNumber = "070765296786";
console.log(course);
console.log(address);
console.log(phoneNumber);

var details =
  "My course is " +
  course +
  " and i live in " +
  address +
  " and my phone number is " +
  phoneNumber;
console.log(details);

var fatherName = "my father's name is Sulaiman";
// fatherName = 'Sulaiman';
console.log(fatherName);

// RULES FOR NAMING VARIABLES
var surName; //starts with a name
var $surName; //starts with a dollar sign ($)
var _surName; //starts with a underscore

// JAVASCRIPT IS A CASE SENSITIVE LANGUAGE
var userName = "admin";
console.log(userName);

// JAVASCRIPT NAMING CONVENTION
// 1. camelCase
var carName = "benz";
console.log(carName);
// 2. underscore or snake
var car_name = "lexus, mercedez";
console.log(car_name);

// STRINGS
var color = "red";
var age = "10 years old";
var length = 10;
var width = 20;
var additionOfLength_width = length + width;
console.log(additionOfLength_width);
console.log(typeof color);
console.log(typeof age);
console.log(typeof length);

// MATHEMATICAL OPERATORS IN JAVASCRIPT
/*
1. Addition
2. Multiplication
3. Division
4. Subtraction
5. Modulus*/

// ASSIGNMENT OPERATORS OR MALTIMATICAL OPERATORS
/*
+=, -=, *=, /=, ++, --, %*/

var priceOfBeans = 100;
var priceOfRice = 200;
var quantity = 30;
var riceAmount = priceOfRice * quantity;
var totalGoods = priceOfRice + priceOfBeans;
var totalGoods = priceOfRice - priceOfBeans;
var totalGoods = priceOfRice / priceOfBeans;
var totalGoods = priceOfRice % priceOfBeans;
console.log(riceAmount);
console.log(totalGoods);

var Contributions = 500;
Contributions += 50;
Contributions += 50;
Contributions += 50;
Contributions -= 50;
Contributions *= 20;
Contributions += 1;
console.log(Contributions);

// CLASS TRIAL
const htmlContent = document.querySelector(".items-html");
const javascriptContent = document.querySelector(".items-javascript");
const oopContent = document.querySelector(".items-OOP");
const html = document.querySelector(".html");
const javascript = document.querySelector(".javascript");
const OOP = document.querySelector(".OOP");

htmlContent.addEventListener("click", () => {
  html.innerHTML =
    "Hypertext Markup Language, a standardized system for tagging text files to achieve font, colour, graphic, and hyperlink effects on World Wide Web pages."
});
javascriptContent.addEventListener("click", () => {
  html.innerHTML =
    "an object-oriented computer programming language commonly used to create interactive effects within web browsers."
});
oopContent.addEventListener('click', () => {
    html.innerHTML = ' Object-oriented programming (OOP) is a computer programming modelthat organizes software design around data, or objects, rather thanfunctions and logic.';
    
})