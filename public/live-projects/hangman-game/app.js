import Hangman from "./hangman.js";

const user = document.querySelector("#user-text");
const addBtn = document.querySelector("#add-btn");
const resetBtn = document.querySelector(".reset-btn");

const wordList = [
  "homework",
  "javascript",
  "universe",
  "hypothetically",
  "childhood",
  "luxury",
  "awkward",
  "adventurous",
  "generous",
  "extraordinary",
];
const randomWord = wordList[Math.trunc(Math.random() * 10)];
const hangmanWord = new Hangman(`${randomWord}`);

addBtn.addEventListener("click", function (event) {
  event.preventDefault();
  hangmanWord.checkingLetters(user.value.toLowerCase());
  user.value = "";
  user.focus();
});

resetBtn.addEventListener("click", function () {
  location.reload();
});
