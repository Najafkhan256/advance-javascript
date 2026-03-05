// 3 types of methods in JavaScript
// 1- Contructor method
// 2- Prototype method
// 3- Static method

// const incrementBtnEl = document.getElementById("incrementBtn");
let score = 1;

class greeting {
  message() {
    console.log("WELCOME!");
  }
  sorry() {
    console.log("SORRY!");
  }
}

// incrementBtnEl.addEventListener("click", function () {
//   incrementBtnEl.textContent = `Incremented! ${score}`;
//   score++;
// });

class students {
  constructor(name) {
    this.studentName = name;
    console.log("This is constructor function");
  }
  studentMessage() {
    console.log("Hello " + this.studentName);
  }
  static staticMethod() {
    console.log("This is static function");
  }
}

let greet = new greeting();
let student = new students("Najaf Khan");
students.staticMethod();

greet.message();
greet.sorry();
student.studentMessage();
