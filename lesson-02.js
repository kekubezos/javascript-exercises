"use strict";

// Lesson 02 exercise: Variables and data types
// In your exercise repository, create a branch named `lesson-02-exercise` and switch to it,
// then open `lesson-02.js`. The questions are inside as comments, and the file begins with the
// strict mode line. Work through the parts in order, beneath each question.

// TODO: Part one.
// Declare five variables that describe a small shop of your choosing, mixing `const` and `let`
// deliberately and naming everything in camelCase. Log each variable, and add a one-line
// comment justifying every choice between `const` and `let`.
const location = "Brandenburger Tor";
let price = 78.9;
const phoneNumber = 14566783;
let numberOfEmployees;
const isBakery = true;

// TODO: Part two.
// Log the `typeof` result for each of your five variables, and additionally for `null` and for
// `undefined`. Note in a comment which one of these results is a famous historical bug of the
// language.
console.log(typeof location);
console.log(typeof price);
console.log(typeof phoneNumber);
console.log(typeof numberOfEmployees);
console.log(typeof isBakery);
console.log(typeof cleaners);
console.log(typeof null);

// Historical bug is null. Returns object as type.

// TODO: Part three.
// Declare one variable without assigning it a value, and a second variable set to `null` on
// purpose. Log both values and both `typeof` results, and state the difference between the two
// kinds of nothing in one comment sentence.
let orderCount;
let incentives = null;

console.log(typeof orderCount);
console.log(typeof incentives);

// undefined means the absence of a value. Because I declared the variable orderCount and did not assign any value, the type is undefined.
// null means I deliberately set the value to nothing.I assigned a value but the value is nothing.

// TODO: Part four.
// Convert the three provided string values to their intended types using `Number()` and
// `Boolean()`, and convert one number of your own to a string with `String()`. Log each result
// together with its `typeof`, and note in a comment which conversion would produce `NaN` if
// the string were not a clean number.

// * The three provided string values:
const priceText = "4.50";
const countText = "12";
const flagText = "true";

console.log(Number(priceText));
console.log(Number(countText));
console.log(Boolean(flagText));

console.log(typeof Number(priceText));
console.log(typeof Number(countText));
console.log(typeof Boolean(flagText));

const age = 24;
console.log(String(age));
console.log(typeof String(age));

//console.log(Number(flagText));
// The variable flagText will produce NaN if we change its type to Number

// TODO: Part five.
// The file ends with a short broken program that contains a reassigned `const`, an assignment
// to a variable that was never declared, and a variable read before its declaration line. Run
// it, read each error message carefully, repair all three problems, and describe each repair
// in one comment line.

// ! This broken program crashes on purpose, one error at a time.
// ! Keep it commented until you reach this part, then uncomment and repair:
let bakeryName = "Maison Sarah";
bakeryName = "The Corner Bakery";

const openingHour = 7;

let loafCount = 12;
console.log(loafCount);

/*Using const to declare a variable means the variable is permanent and would not be changed later hence the error.
To solve this I have to use let instead of const.
*/

/* Variable openingHour is not defined because we did not use a const or let keyword when declaring the variable.
To solve this, I initialize the variable using const or let.*/

/* We are trying to display the value of the loafCount variable before declaring the variable. Node does not see the declared variable beneath.
To solve this, the variable declaration on the next line must be moved uo before the console.log hence making it visible.*/

// TODO: Part six.
// Two variables, `a` and `b`, hold different values. Swap their contents using a third,
// temporary variable, and log both afterwards to prove the swap succeeded. This is the oldest
// exercise in programming, and it still earns its place.
let a = 3;
let b = 2;

let c = a;

a = b;

b = c;

console.log(a);
console.log(b);

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main.
// TODO: Submit the link to the pull request for review.
