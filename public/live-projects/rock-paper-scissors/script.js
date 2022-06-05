const imgRock = document.querySelector("#img-rock");
const imgScissors = document.querySelector("#img-scissors");
const imgPaper = document.querySelector("#img-paper");
const playerPC = document.querySelector(".player-PC");
const playerUser = document.querySelector(".player-user");
const ImgPlayerPC = document.querySelector(".choosen-image-PC");
const ImgPlayerUser = document.querySelector(".choosen-image-player-user");
const message = document.querySelector(".message");
const images = document.querySelectorAll(".images");

const init = function () {
  message.classList.add("hidden");
  ImgPlayerPC.classList.add("hidden");
  ImgPlayerUser.classList.add("hidden");
};

init();

let state = true;

const chooseMsg = function (msg) {
  if (msg == "lost") {
    message.classList.remove("hidden");
    message.innerText = "YOU LOST! 😢";
    playerPC.classList.add("player--winner");
    playerUser.classList.remove("player--winner");
  } else if (msg == "win") {
    message.classList.remove("hidden");
    message.innerText = "YOU WON! 🥳";
    playerUser.classList.add("player--winner");
    playerPC.classList.remove("player--winner");
  } else if (msg == "tie") {
    message.classList.remove("hidden");
    message.innerText = `IT'S A TIE!\nTRY AGAIN!😉`;
    playerPC.classList.add("player--winner");
    playerUser.classList.add("player--winner");
  }
};

const msgDisplayed = function (pc, player) {
  if (pc == player) {
    chooseMsg("tie");
  } else if (pc == 1 && player == 2) {
    chooseMsg("lost");
  } else if (pc == 1 && player == 3) {
    chooseMsg("win");
  } else if (pc == 2 && player == 1) {
    chooseMsg("win");
  } else if (pc == 2 && player == 3) {
    chooseMsg("lost");
  } else if (pc == 3 && player == 1) {
    chooseMsg("lost");
  } else if (pc == 3 && player == 2) {
    chooseMsg("win");
  }
};

const clickImg = function () {
  images.forEach((img) => img.classList.remove("img-active"));
  this.classList.add("img-active");
  let imgPlayer;

  if (this == imgRock) {
    imgPlayer = 1;
  } else if (this == imgScissors) {
    imgPlayer = 2;
  } else if (this == imgPaper) {
    imgPlayer = 3;
  }
  const imagePC = Math.trunc(Math.random() * 3) + 1;

  ImgPlayerPC.src = `./images/image-${imagePC}.png`;
  ImgPlayerUser.src = `./images/image-${imgPlayer}.png`;

  msgDisplayed(imagePC, imgPlayer);

  ImgPlayerPC.classList.remove("hidden");
  ImgPlayerUser.classList.remove("hidden");
};

imgRock.addEventListener("click", clickImg);
imgScissors.addEventListener("click", clickImg);
imgPaper.addEventListener("click", clickImg);
