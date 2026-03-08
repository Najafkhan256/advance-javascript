function promiseResolved(number, stage) {
  return function (resolved, rejected) {
    setTimeout(() => {
      console.log(`${stage} Promise is ${resolved ? "resolved" : "rejected"}`);
      resolved(number);
    }, number * 100);
  };
}

let p1 = new Promise(promiseResolved(10, "First"));
let p2 = new Promise(promiseResolved(20, "Second"));
let p3 = new Promise(promiseResolved(30, "Third"));
let p4 = new Promise((resolved, rejected) => {
  rejected("4th promise is rejected!");
});

// let p2 = new Promise((resolved, rejected) => {
//   setTimeout(() => {
//     console.log("Second Promise is rejected.");
//     resolved(20);
//   }, 2 * 1000);
// });
// let p3 = new Promise((resolved, rejected) => {
//   setTimeout(() => {
//     console.log("Third Promise is resolved.");
//     resolved(30);
//   }, 3 * 1000);
// });

let total = 0;
Promise.all([p1, p2, p3, p4])
  .then((success) => {
    for (let i in success) {
      total += success[i];
    }
    console.log(`RESULT: ${success}`);
    console.log(`TOTAL: ${total}`);
  })
  .catch((error) => {
    console.log(`ERROR: ${error}`);
  });
