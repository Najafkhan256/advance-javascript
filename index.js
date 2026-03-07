const onFullfiled = (result) => {
  console.log(result);
};
const onRejected = (error) => {
  console.log(error);
};

const prom = (result) => {
  return new Promise(function (resolved, reject) {
    console.log("Fetching data, please wait...");

    setTimeout(() => {
      if (result) {
        resolved("Here is the success!");
      } else {
        reject("Here is the rejection!");
      }
    }, 3000);
  });
};

// prom(true).then(onFullfiled).catch(onRejected);
prom(false)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
// prom.then(onFullfiled);
// prom.catch(onRejected);
