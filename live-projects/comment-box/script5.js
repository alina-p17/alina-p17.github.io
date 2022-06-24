const btnAdd = document.querySelector("#btn-add");
const btnInput = document.querySelector(".user-input");
const containerMain = document.querySelector(".container-main");

const arrComments = [
  "Glad to hear you are doing well and they are lucky to have you!",
  "I feel the same way! Meeting so many different passionate people is what life shoud be like :D",
  "Let's catch up when I get back",
];

const createComments = function (userComm) {
  const section = document.createElement("section");
  const comment = document.createElement("p");
  const divEl = document.createElement("div");
  const btnDelete = document.createElement("button");
  const userImgAndEmail = `<div class="section"><img class="section-img" src="./img/user-icon.png" alt="User icon" /><div class="user-email-div"><h4 class="user-email">jessica.smith@gmail.com</h4></div></div>`;

  btnDelete.textContent = "Delete";
  btnDelete.classList.add("btn-delete");
  divEl.classList.add("div-btn-delete");
  section.classList.add("text-section");
  section.appendChild(comment);
  section.appendChild(divEl);
  divEl.appendChild(btnDelete);
  comment.classList.add("paragraph");
  comment.textContent = userComm;
  containerMain.appendChild(section);
  comment.insertAdjacentHTML("beforebegin", userImgAndEmail);

  btnDelete.addEventListener("click", function () {
    section.innerHTML = " ";
    section.classList.remove("text-section");
  });
};

const displayComments = function (comm) {
  for (let i = 0; i < comm.length; i++) {
    createComments(comm[i]);
  }
};

displayComments(arrComments);

btnAdd.addEventListener("click", function (event) {
  event.preventDefault();
  createComments(btnInput.value);
  btnInput.value = " ";
});
