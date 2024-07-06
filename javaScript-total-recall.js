//variables and datatypes
// 1. How do we assign a value to a variable?
// use the assignment (=) operator to assign a value to a variable or property.
//2. how do we change the value of a variable?
// the first and easiest way of changing a value of a variable is simply to reassign it:
//example, let numberOfCats = 3; numberOfCats = 4;
//3. what are declare, assign, define:
// declare use var(only in older programs), let, const
// assign using the assignment opperator
// define a variable is to give the variable a value. 
//5. what is pseudocoding and why should you do it?
// pseudocoding is using plain language to discribe what the code is doing. We should use it to help process the logic you indend to execute.
// 6. what percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
// you should spend over half the time planning (over 60%), the time should be spent in solving the actual coding should take less time. 

// B STRINGS
// let firstVariable = "Hello World";
// firstVariable = 32;
// let secondVariable = firstVariable;
// secondVariable = "Nice!"
// console.log(firstVariable);
// let yourName = "Danielle";
// let greeting = `Hello, my name is ${yourName}`;
// console.log(greeting);

// BOOLEANS
// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

// console.log(a != b);
// console.log(c != d);
// console.log('Name' == 'Name');
//FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true || false);
// console.log(false && false && false || true);
// console.log(false == false);
// console.log(e == 'Kevin');
// console.log(a < b != c);
// console.log(a == a != d);
// console.log(48 == '48');

//The farm
// if the animal is a cow print mooo
// if the animal is not a cow print "Hey! You're not a cow."

// let animal = "cow";

// if (animal === "cat"){
//     console.log("mooooo");
// } else {
//     console.log("Hey! You're not a cow.");
// }


//E DRIVERS ED

// let personAge = 27;

// if (personAge >= 16){
//     console.log("Here are the keys!");
// } else {
//     console.log("Sorry, you're too young.");
// }
//II. LOOPS
// 1. The basics
// for (let i = 0; i < 11; i++) {
//     console.log(i)
// }
//2. 
// for (let i = 10; i < 401; i++) {
//     console.log(i)
// }
// 3.
// for (let i = 12; i < 4001; i += 3) {
//     console.log(i)
// }
// Get even

// for (let a = 2; a < 100; a += 2) {
//     console.log(a + "is an even number")
// }
// Give me Five

// 1.
//  if i multiple of three
// for (let i = 0; i < 101; i++) {
//     if (i % 3 === 0) {
//         console.log(`I found a ${i}. three is a crowd!`)
//         //  2.   if i is a multiple of 5
//         if (i % 5 === 0) {
//             console.log(`I found a ${i}. High five!`)

//         }
//     }
// }

// D Savings account

let bank_account = 0;

for (i = 0; i <= 10; i++) {

    bank_account += i;


}
for (i = 0; i <= 100; i++) {

    bank_account += i * 2;


}

console.log(bank_account)

// Arrays & Control flow

//A. Talk about it

//1. What are the things in an array called?
//  the things in an array are called an element or items

//2. Do arrays guarantee those things will be in order?
//  yes

//3. What real life thing could you model with an array?
// Colors for a project

// B. Easy does it

// let quotes = ['Now or never', 'Nurture your best', 'Do it now'];
// console.log(quotes)

// C. Accessing elements

const randomThings = [1, 10, "Hello", true]
//1.
console.log(randomThings[0]);
//2.
randomThings[2] = 'world'
console.log(randomThings[2]);
// 
console.log(randomThings)
//the array did update: the string "Hello" was changed to "World"

//D Change values

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github",]

//1. what would you write to access the 3rd element of the array?

console.log(ourClass[2])
//2. Change the value of "github" to "Octocat"
ourClass[4] = "Octocat";
console.log(ourClass);
ourClass.push("Cloud City")
console.log(ourClass)