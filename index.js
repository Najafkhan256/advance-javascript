const name = "John Doe";
const age = 25;
const greeting = "Hello, Advanced JavaScript!";

// console.log(name + " is " + age + " years old.");
console.log(`${name} is ${age} years old.`);
let arr = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

let sum = 0;
// rest operators (...numbers) - it collects all the remaining arguments into an array
function add(name, ...numbers) {
  document.write(`<p>${name} is adding the numbers: ${numbers.join(", ")}</p>`);
  //   for (let number of numbers) {
  //     sum += number;
  //   }
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
}

// step: 1
// add("NZ", 1, 2, 3, 4, 5);
// step: 2
// add("NZ", arr);
// step: 3
add("NZ", ...arr); // spread operator - it spreads the elements of an array into individual arguments

let arr3 = [2, ...arr, ...arr2, 44]; // spread operator to combine two arrays
console.log(arr3);
console.log(`The sum is: ${sum}`);
