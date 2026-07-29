"use strict";

// Lesson 05 exercise: Functions
// In your exercise repository, create a branch named `lesson-05-exercise` and switch to it,
// then open `lesson-05.js`. The questions wait as comments, and the file begins with the
// strict mode line. Work beneath each question in order.

// TODO: Part one.
// Take the order pricing chain from the previous exercise, which the file provides again, and
// wrap it in a declared function that receives the order size as a parameter. Call the
// function with four different sizes and log each result.

// * The pricing chain from the previous exercise, provided again:
const orderSize = 14;
if (orderSize > 12) {
  console.log("Large order, call the bakery ahead");
} else if (orderSize > 6) {
  console.log("Medium order, ready in an hour");
} else {
  console.log("Small order, walk right in");
}

function pricingChain(orderSize) {
  if (orderSize > 12) {
    console.log("Large order, call the bakery ahead");
  } else if (orderSize > 6) {
    console.log("Medium order, ready in an hour");
  } else {
    console.log("Small order, walk right in");
  }
}

console.log(pricingChain(3));

// TODO: Part two.
// Change the function so that it returns its message instead of printing inside the body, and
// move every `console.log` to the call site. Add a one-sentence comment on why the returning
// version is more reusable.

function pricingChain(orderSize) {
  if (orderSize > 12) {
    return "Large order, call the bakery ahead";
  } else if (orderSize > 6) {
    return "Medium order, ready in an hour";
  }
  return "Small order, walk right in";
}

// Every function will only return a particular statement when it is met and ends the function.
//Hence it is more efficient since it does not only print to screen too.

// TODO: Part three.
// The file provides two small declared helper functions. Convert the first into a function
// expression and the second into a one-line arrow function with an implicit return, and prove
// with logged calls that the behavior of both is unchanged.

// * The two provided helpers, convert the first to a function expression,
// * the second to a one-line arrow function with an implicit return:
/*
function double(n) {
  return n * 2;
}
function shout(text) {
  return `${text.toUpperCase()}!`;
}
*/

const double = (n) => {
  return n * 2;
};

const shout = (text) => `${text.toUpperCase()}!`;

console.log(double(12));
console.log(shout("shut up"));

// TODO: Part four.
// Give your pricing function a default parameter value, and log one call that supplies the
// argument and one call that relies on the default.
function pricingChain(orderSize = 9) {
  if (orderSize > 12) {
    return "Large order, call the bakery ahead";
  } else if (orderSize > 6) {
    return "Medium order, ready in an hour";
  }
  return "Small order, walk right in";
}

console.log(pricingChain(13));
console.log(pricingChain());

// TODO: Part five.
// Write a function named `repeat` that receives a callback and a count, and calls the callback
// that many times using the counting pattern provided in the file's starter comments. Pass it
// an arrow function of your own and run it.

// * The starter counting pattern for repeat(callback, count):
// * let i = 1;
// * while (i <= count) { call the callback here; i = i + 1; }

function repeat(action, count) {
  let i = 1;
  while (i <= count) {
    action();
    i = i + 1;
  }
}
const call = () => console.log("JS is fun!");
repeat(call, 18);

// TODO: Part six.
// The file contains a short program with global, function, and block declarations, including
// one shadowed name. Before running it, write a comment predicting each logged line; then run
// it, correct your misses, and leave both prediction and result visible.

// * The provided scope program, predict every logged line before running:
const shopName = "Maison Sarah";
function greet(customer) {
  const shopName = "The Corner Bakery";
  return `Welcome to ${shopName}, ${customer}`;
}
console.log(greet("Anna")); // prediction: Welcome to The Corner Bakery, Anna.
console.log(shopName); // prediction: Maison Sarah
if (true) {
  const insideIf = "visible in here";
  console.log(insideIf); // prediction: visible in here
}
//console.log(insideIf); // prediction first, then uncomment to verify: Wont be able to see it. insideIf not defined.

// TODO: Part seven.
// Write the classic temperature converter as two functions, one converting Celsius to
// Fahrenheit and one converting back, each returning its result. Log a small table of three
// conversions in each direction, formatted with template literals and `toFixed`.

const celsiusToFahrenheit = (temperature = 68) =>
  `${temperature}°C is ${(temperature * 1.8 + 32).toFixed(1)}°F`;

const fahrenheitToCelsius = (temperature = 68) =>
  `${temperature}°F is ${((temperature - 32) / 1.8).toFixed(1)}°C`;

console.log(`${celsiusToFahrenheit(14)}`);
console.log(`${celsiusToFahrenheit(28)}`);
console.log(`${celsiusToFahrenheit(40)}`);

console.log(`${fahrenheitToCelsius(180)}`);
console.log(`${fahrenheitToCelsius(132)}`);
console.log(`${fahrenheitToCelsius(200)}`);

// TODO: Part eight.
// The file provides a line that throws a TypeError when run. Wrap it in `try` and `catch`, log
// a friendly sentence that contains the error's message, and log one further line after the
// block to prove the program survived.

// ! This line throws a TypeError. Keep it commented until this part,
// ! then uncomment it and wrap it in try and catch:
const answer = 42;
try {
  console.log(answer.toUpperCase());
} catch (error) {
  console.log(`That did not execute:${error.message}`);
}

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
