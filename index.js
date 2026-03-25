// async function fetchData() {
//   let response = await fetch("/data/data.json");
//   let data = await response.json();

//   return data;
// }

async function fetchData() {
  try {
    let response = await fetch("/data/data.json");
    let data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

fetchData().then((data) => {
  console.log("DATA:", data);
});
