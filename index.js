let user = {
  name: "John",
  age: 30,
  greeting: () => {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`,
    );
  },
};

let { name: userName, greeting, age: userAge } = user;

greeting = greeting.bind(user);

console.log(userName);
console.log(userAge);
greeting();
