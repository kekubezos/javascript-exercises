"use strict";

// Lesson 07 exercise: Objects
// In your exercise repository, create a branch named `lesson-07-exercise` and switch to it,
// then open `lesson-07.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Model a single menu item as an object with at least four properties of mixed types,
// including one boolean. Log two properties with dot notation, then log one property through
// bracket notation with the key held in a variable, and note in a comment why the brackets
// were required in that case.
/*const bread = {
  name: "Baguette",
  origin: "France",
  price: 12.8,
  isFresh: true,
  buyers: ["Ken", "Jamaal", "Jeph", "Keli"],
};

const field = "name";
console.log(bread[field]);

console.log(bread.buyers);
console.log(bread.origin);
*/
// Brackets were required because the key is stored in a variable and that is how you can access it.

// TODO: Part two.
// Give the item a `describe` method that returns one sentence built from the object's own
// properties through `this`, and log the result of calling it.
const bread = {
  name: "Baguette",
  origin: "France",
  price: 12.8,
  vegetarian: true,
  buyers: ["Ken", "Jamaal", "Jeph", "Keli"],
  describe: function () {
    return `${this.name} is from ${this.origin} and costs ${this.price}€`;
  },
};

console.log(bread.describe());

// TODO: Part three.
// Build an array of at least five menu item objects, and walk it with `for...of`, logging one
// formatted line per item.
const menuItems = [
  {
    name: "Baguette",
    origin: "France",
    price: 12.8,
    vegetarian: true,
  },
  {
    name: "Tea Bread",
    origin: "Ghana",
    price: 10.6,
    vegetarian: false,
  },
  {
    name: "Croissant",
    origin: "Bolivia",
    price: 5.3,
    vegetarian: true,
  },
  {
    name: "Doughnut",
    origin: "Brazil",
    price: 11.4,
    vegetarian: false,
  },
  {
    name: "Butter Bread",
    origin: "Colombia",
    price: 2.8,
    vegetarian: true,
  },
];

for (let menuItem of menuItems) {
  console.log(menuItem);
}

// TODO: Part four.
// Put the callback methods to work on the data: log the names of all vegetarian items by
// combining `filter` and `map`, and fetch the first item cheaper than three euros with `find`.
// Add a comment stating what `find` returns when nothing matches.
//bread.map(()=>)
const vegetarianNames = menuItems
  .filter((item) => item.vegetarian)
  .map((item) => item.name);

const cheapItem = menuItems.find((item) => item.price < 3);

console.log(vegetarianNames);
console.log(cheapItem);

// undefined is returned when nothing is found.

// TODO: Part five.
// Take one menu item and log its keys, its values, and finally every pair through a `for...of`
// loop over its entries with a destructured pair, formatted as the key, a colon in the output
// text, and the value.
let selectedMenuItem = menuItems[3];

console.log(Object.keys(selectedMenuItem));
console.log(Object.values(selectedMenuItem));
console.log(Object.entries(selectedMenuItem));

for (const [key, value] of Object.entries(selectedMenuItem)) {
  console.log(`${key} : ${value}`);
}

// TODO: Part six.
// Assign one item to a second variable, change the price through the second name, and log the
// first to demonstrate the shared reference. Then build a spread copy that overrides only the
// price, and log both objects to prove they now differ in exactly that property.
let newItem = selectedMenuItem;
newItem.name = "Plantain";

console.log(selectedMenuItem);
console.log(newItem);

let updatedItem = { ...selectedMenuItem };
updatedItem.price = 20.7;

console.log(selectedMenuItem);
console.log(updatedItem);

// TODO: Part seven.
// As a stretch, build the classic word frequency counter: split the provided sentence into
// words and walk them with a loop, using each word as a bracket-notation key on a counter
// object and adding one per sighting. Log the finished counter, and if the sort extension
// caught your interest, log its entries ordered so that the most frequent word comes first.

// * The provided sentence for the word frequency counter:
const sentence =
  "the quick brown fox jumps over the lazy dog the fox sleeps and the dog dreams";

const splitWords = sentence.split(" ");
console.log(splitWords);

const wordCounts = {};

for (let word of splitWords) {
  if (wordCounts[word]) {
    wordCounts[word] += 1;
  } else {
    wordCounts[word] = 1;
  }
}

console.log(wordCounts);
// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
