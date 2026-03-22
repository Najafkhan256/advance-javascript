const titleEl = document.getElementById("title");
const bodyEl = document.getElementById("body");
const userIdEl = document.getElementById("userId");
const formSubmitEl = document.getElementById("formSubmit");
const postContainerEl = document.getElementById("post-list");
const modalEl = document.getElementById("modal");
const modalCloseButtonEl = document.getElementById("close-btn");
const addUserBtnEl = document.getElementById("add-user-btn");
const deleteUserBtnEl = document.getElementById("delete-user-btn");
const modalTitleEl = document.getElementById("modal-title");
const modalFromSubmitEl = document.getElementById("modalFormSubmit");

let users = [];

addUserBtnEl.addEventListener("click", function () {
  modalEl.style.display = "flex";
  modalTitleEl.innerText = "Add User";
  titleEl.value = "";
  bodyEl.value = "";
  userIdEl.value = "";
});

let prom = new Promise((resolved, reject) => {
  setTimeout(() => {
    if (users.length > 0) {
      resolved(users);
    } else {
      reject("No data found");
    }
  }, 3000);
});

console.log("prom:", prom);

modalFromSubmitEl.addEventListener("click", function () {
  fetch(`https://jsonplaceholder.typicode.com/posts/${index}`, {
    method: "PUT",
    body: JSON.stringify({
      title: userData.title,
      body: userData.title,
      userId: Number(userData.title),
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
});

function closeModal() {
  modalEl.style.display = "none";
}

formSubmitEl.addEventListener("click", (e) => {
  e.preventDefault();
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: titleEl.value,
      body: bodyEl.value,
      userId: Number(userIdEl.value),
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      alert("Post added successfully!");
      console.log(data);
    });
});

function editList(index) {
  modalEl.style.display = "flex";
  const userData = users[index];
  console.log(users[index]);

  titleEl.value = userData.title;
  bodyEl.value = userData.body;
  userIdEl.value = userData.id;

  form;
}

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    users = data;
    for (let i in data) {
      const item = data[i];
      let message = `<div onclick="editList(${i})"> ${item.id} ${item.title} </div>`;
      postContainerEl.innerHTML += message;
    }
  })
  .catch((error) => console.log("Data not fetched", error));
