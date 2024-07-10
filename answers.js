// Easy Going

// for (let i = 1; i <= 20; i++) {
//     console.log(i);
// }

//Get Even

// for (let i = 0; i <= 200; i += 2) {
//     console.log(i);
// }

// Fizz Buzz

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//         console.log("Fizz");

//     } else if (i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log(i);
//     }
// }

//Wild Wild Life
// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
// const sharky = ["Sharky", "shark", 20, "Left Coast"];
// const plantee = ["Plantee", "plant", 5000, "Mordor"];
// const porgee = ["Porgee", "porg", 186, "Ahch-To"];
// const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];

// 1. Plantee just had her birthday, cahnge Plantee's array to reflect her beiag a year older.
// plantee[2] += 1;

//2. Change wolfy's hometown from "Yukon Territory" to "Gotham City".

// wolfy[3] = "Gotham City";

//3.Give D'Art a second hometown by adding "Hawkins".
// dart.push("Hawkins");

//4. Porgee decides that wolfy can't be named "Wolfy"anymore. Remove "Wolfy" from the wolf array and replace it with "Gameboy".

// wolfy[0] = "Gameboy";

// console.log(plantee);
// console.log(wolfy);
// console.log(dart);
// console.log(porgee);
// console.log(sharky);

// Yell at the Ninja Turtles

// const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

// for (const turtle of ninjaTurtles) {
//     console.log(turtle.toUpperCase());
// }


// Methods, Revisited

// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'HarryPotter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

// console.log(favMovies.indexOf('Titanic'));

// favMovies.sort();
// console.log(favMovies);

// favMovies.pop();
// console.log(favMovies);

// favMovies.push("Guardians of the Galaxy");
// console.log(favMovies);

// favMovies.reverse();
// console.log(favMovies);

// favMovies.shift();
// console.log(favMovies);

// favMovies.unshift("New Movie");
// console.log(favMovies);

// const djangoIndex = favMovies.indexOf("Django Unchained");
// if (djangoIndex !== -1) {
//     favMovies.splice(djangoIndex, 1, "Avatar");
// }
// console.log(favMovies);

// const middleIndex = Math.floor(favMovies.length / 2);
// const lastHalf = favMovies.slice(middleIndex);
// console.log(lastHalf);

// const slicedArray = lastHalf;
// console.log(slicedArray);

// console.log(favMovies);

// console.log(favMovies.indexOf("Fast and Furious")); 


// Where is Waldo

// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert", ["Lucinda", "Jacc", "Neff", "Snoop"], ["Petunia", ["Baked Goods", "Waldo"]]];
// whereIsWaldo.splice(1, 1);
// console.log(whereIsWaldo);


// whereIsWaldo[1][2] = "No One";
// console.log(whereIsWaldo);

// console.log(whereIsWaldo[2][1][1]);


//  Excited Kitten


// for (let i = 1; i <= 20; i++) {
//     console.log("Love me, pet me! HSSSSSSS!");

//     if (i % 2 === 0) {
//         const randomMessages = [
//             "...human...why you taking pictures of me?...",
//             "...the catnip made me do it...",
//             "...why does the red dot always get away..."
//         ];

//         const randomIndex = Math.floor(Math.random() * randomMessages.length);
//         console.log(randomMessages[randomIndex]);
//     }
// }
//  Find the Median
const nums = [14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12, 17, 12, 71, 18, 15, 12];
nums.sort((a, b) => a - b);

const middleIndex = Math.floor(nums.length / 2);
let median;
if (nums.length % 2 === 0) {
    median = (nums[middleIndex - 1] + nums[middleIndex]) / 2;
} else {
    median = nums[middleIndex];
}

console.log(median)