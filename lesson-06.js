"use strict";

// Lesson 06 exercise: Arrays and loops
// In your exercise repository, create a branch named `lesson-06-exercise` and switch to it,
// then open `lesson-06.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Build an array of at least five menu item names. Log the whole array, the first item, the
// last item read through `length` minus 1, and the array's length.
const menu = [
  "Fufu",
  "Hotdog",
  "Banku",
  "Salami Pizza",
  "Asian Noodles",
  "Eba",
];
console.log(menu);
console.log(menu[0]);
console.log(menu[menu.length - 1]);
console.log(menu.length);

// TODO: Part two.
// Grow and shrink the menu with one `push`, one `unshift`, one `pop`, and one `shift`, logging
// the array after each step, and note in a comment which end of the array each method touched.
menu.push("Fried Yam"); //Added string items to the end of the array.
console.log(menu);
menu.unshift("Cake", "Doughnut"); //Added string items to the start of the array.
console.log(menu);
menu.pop(); // Removes the last element in the array.
console.log(menu);
menu.shift(); // Removes the first element in the array.
console.log(menu);

// TODO: Part three.
// Print every menu item twice, first with a counting `for` loop that uses the index, then with
// a `for...of` loop, and add a one-line comment on when you would choose each form.
for (let i = 0; i < menu.length; i++) {
  console.log(menu[i]);
}

for (const menuItem of menu) {
  console.log(menuItem);
}

// I use for...of if I just want to just return every item in the array.
// I use the for loop if I want to keep track of the index too.

// TODO: Part four.
// Using the provided prices array, build display strings with `map`, keep the items under five
// euros with `filter`, and fetch the first item over ten euros with `find`, logging each
// result. Add a comment stating what `forEach` would have returned in their place, and why
// that is the well-known trap.

// * The provided prices:
const prices = [4.5, 12, 3.2, 8];
const displayPrices = prices.map((price) => `${price}€`);
console.log(displayPrices);
const cheapPrices = prices.filter((price) => price < 5);
console.log(cheapPrices);
const expensivePrices = prices.find((price) => price > 10);
console.log(expensivePrices);

// forEach would have returned undefined because forEach has no return statement.

// TODO: Part five.
// Loop over the provided artists array and log a two-line card for each artist using template
// literals. Then add one artist of your own invention to the data and run the file again,
// noting in a comment what you did not have to change.

// * The provided artists:
const artists = [
  "Pinkfong",
  "Adriano Celentano",
  "Asake",
  "Miyagi and Andy Panda",
  "Johnny Cash",
  "Sarkodie",
];

for (const artist of artists) {
  console.log(`Artist Name : ${artist}`);
  console.log(`Artist Name Length: ${artist.length}`);
}
// TODO: Part six.
// Assign the menu to a second variable, push a new item through the second name, and log both
// variables to demonstrate the shared reference. Then create a spread copy, change the copy,
// and log both lengths to prove the original survived.
const newMenu = menu;
newMenu.push("Bofrot");

console.log(menu);
console.log(newMenu);

const updatedMenu = [...menu];
updatedMenu.push("Wagashi");

console.log(menu.length);
console.log(updatedMenu.length);

// TODO: Part seven.
// The counting classics. Implement FizzBuzz in full: loop from 1 to 100, printing Fizz for
// multiples of 3, Buzz for multiples of 5, FizzBuzz for both, and the number itself otherwise,
// reusing your single-number logic from the conditionals exercise. Then, with loops over the
// provided numbers array, compute the sum and find the largest value without library helpers.

// * The provided numbers for the sum and the largest:
const numbers = [12, 5, 41, 8, 33, 2, 27];

//FizzBuzz code
for (let number = 1; number <= 100; number++) {
  console.log(number);
  if (number % 3 === 0 && number % 5 === 0) {
    console.log("FizzBuzz");
  } else if (number % 3 === 0) {
    console.log("Fizz");
  } else if (number % 5 === 0) {
    console.log("Buzz");
  } else if (number % number === 0) {
    console.log("Skrrr!");
  }
}

//FizzBuzz code
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
  if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
    console.log("FizzBuzz");
  } else if (numbers[i] % 3 === 0) {
    console.log("Fizz");
  } else if (numbers[i] % 5 === 0) {
    console.log("Buzz");
  } else if (numbers[i] % numbers[i] === 0) {
    console.log("Skrrr!");
  }
}

// TODO: Part eight.
// The string classics that waited for loops. Reverse a string with a loop that walks it
// backwards by index. Count its vowels with a loop and `includes` against a vowels array. As a
// stretch, use your reverser to build a palindrome check, and test it on three words, ignoring
// case with `toLowerCase`.
const text = "Kekeli is a success";

// Loop for reversing string
for (let i = text.length - 1; i >= 0; i--) {
  console.log(text[i]);
}

// Loop for counting vowels.
const vowels = ["a", "e", "i", "o", "u"];
let vowelCount = 0;

for (let i = 0; i < text.length; i++) {
  if (vowels.includes(text[i].toLowerCase())) {
    vowelCount++;
  }
}
console.log(`Vowel Count: ${vowelCount}`);

// Palindrome checker
let actualWord = "Panama";
actualWord = actualWord.toLowerCase();

let reversedWord = "";
// Loop for reversing string
for (let i = actualWord.length - 1; i >= 0; i--) {
  reversedWord += actualWord[i];
}
console.log(reversedWord);
if (reversedWord === actualWord) {
  console.log(`${actualWord} is a palindrome.`);
} else {
  console.log(`${actualWord} is not a palindrome.`);
}

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
