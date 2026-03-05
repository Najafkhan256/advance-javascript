// Objecy litteral

const name = "jhon";
const age = 30;
const city = "New York";
const n = "student";

// before ES6
const obj1 = {
  name: name,
  age: age,
  city: city,
};

// in ES6 and later, we can use shorthand property names
const obj2 = {
  name,
  age,
  city,
};

// before ES6
// const obj3 = {
//   [n + "Name"]: name,
//   [n + "Age"]: age,
//   city,
//   details: function () {
//     return `${this.studentName} is ${this.studentAge} years old`;
//   },
// };

// in ES6
const obj3 = {
  [n + "Name"]: name,
  [n + "Age"]: age,
  city,
  details: function () {
    return `${this.studentName} is ${this.studentAge} years old`;
  },
};

function createStudent(name, age, city) {
  return { name, age, city };
}

// const alice = createStudent("Alice", 25, "Los Angeles");
const jhon = createStudent(name, age, city);
const alice = createStudent("Alice", 34, "Pakistan");
// console.log(obj1);
// console.log(obj2);
// console.log(obj3);
// console.log(obj3.details());
// console.log(obj3["details"]());
// console.log(obj3["studentName"]);
// console.log(obj3["studentAge"]);
// console.log(obj3.city);

console.log(jhon);
console.log(alice);
console.log(alice.age);
console.log(alice.city);
