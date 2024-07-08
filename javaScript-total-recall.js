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

// let bank_account = 0;

// for (i = 0; i <= 10; i++) {

//     bank_account += i;


// }
// for (i = 0; i <= 100; i++) {

//     bank_account += i * 2;


// }

// console.log(bank_account)

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

// const randomThings = [1, 10, "Hello", true]
//1.
// console.log(randomThings[0]);
//2.
// randomThings[2] = 'world'
// console.log(randomThings[2]);
// 
// console.log(randomThings)
//the array did update: the string "Hello" was changed to "World"

//D Change values

// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github",]

//1. what would you write to access the 3rd element of the array?

// console.log(ourClass[2])

//2. Change the value of "github" to "Octocat"
// ourClass[4] = "Octocat";
// console.log(ourClass);
// ourClass.push("Cloud City")
// console.log(ourClass)

//E Mix it up
//1.
// const myArray = [5, 10, 500, 20]
// myArray.push("Aegon");
// console.log(myArray);
//2.
// myArray.shift(0)
// console.log(myArray);
//3.
// myArray.unshift("Bob Marley");
// console.log(myArray);
//4.
// myArray.pop(4);
// console.log(myArray);
//5.
// const myArrayReversed = myArray.reverse();
// console.log(myArray);
//Did you mutate the array?
// yes, mutate means to change the array and the order of the array was changed.
//did the reverse method return anything?
// yes, it returned the array in reversed order.

//F Biggie smalls
// let num = 10;
// if (num <= 100) {
//     console.log("Little number");
// }else{
//     console.log("Big number");
// }
//G. MONKEY IN THE MIDDLE
// let num1 = 11;
// if (num1 < 5) {
//     console.log("Little number");
// } else if (num1 > 10) {
//     console.log("Big number");
// } else {
//     console.log("Monkey");
// }

//H. What's in your closet

// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "Per Scholas hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
// ];

// // Thom's closet is more complicated. Check out this nested data structure!!
// const thomsCloset = [
//     [
//         // These are Thom's shirts
//         "grey button-up",
//         "dark grey button-up",
//         "light blue button-up",
//         "blue button-up",
//     ], [
//         // These are Thom's pants
//         "grey jeans",
//         "jeans",
//         "PJs"
//     ], [
//         // Thom's accessories
//         "wool mittens",
//         "wool scarf",
//         "raybans"
//     ]
// ];

//1.What's Kristyn wearing today?
//  Using bracket notation to access items in kristynsCloset,
//  log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.


// console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!")


//2.Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".

// kristynsCloset.splice(6, 0, "raybans")
// console.log(kristynsCloset);

//3.Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.

// kristynsCloset.splice(5, 1, "stained knit hat")
// console.log(kristynsCloset);

//4. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.

// console.log(thomsCloset[0][0]);

//5. In the same way, access one item from Thom's pants array.

// console.log(thomsCloset[1][0]);

//6. Access one item from Thom's accessories array.

// console.log(thomsCloset[2][2]);

//7. Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!

// console.log("Thom is looking fierce in a " + thomsCloset[0][0] + "," + " " + thomsCloset[1][0] + " " + "and" + " " + thomsCloset[2][2] + "!");

//8. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
//need help could not figure this one out

// thomsCloset.splice(2, 0);
// console.log(thomsCloset);

//FUNCTIONS
//B printCool

// const printCool = (agrument) => {
//     return  agrument + " " + "is cool";
// };
// console.log(printCool("Captian Reynolds"));

//C calculateCube

// function calculateCube(number) {
//     return number * number * number;
// }

// console.log(calculateCube(5));

//D. isVowel

function isVowel(charater) {
    charater = charater.toLowerCase();


    if (charater === 'a' || charater === 'e' || charater === 'i' || charater === 'o' || charater === 'u') {
        return true;
    } else {
        return false;
    }
}
console.log(isVowel('a'));
console.log(isVowel('b'));
console.log(isVowel('c'));
console.log(isVowel('d'));
console.log(isVowel('E'));


