let userDetail = ["alice", 34, false, "New York", ["Male", 45000]];

let [name, age, isPizzaLover, city, [gender, salary]] = userDetail;
// console.log(name);
// console.log(age);
// console.log(isPizzaLover);
// console.log(gender);
// console.log(salary);

let userDetail2 = ["bob", 28, true, "Los Angeles"];

let [userName, ...userArgs] = userDetail2;

// console.log(userName);
// console.log(userArgs);

function userDetails([name, age, isPizzaLover, city]) {
  console.log(name);
  console.log(age);
  console.log(isPizzaLover);
  console.log(city);
}

userDetails(userDetail2);
