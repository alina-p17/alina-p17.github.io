import Player from "./Player.js";
import Monster from "./Monster.js";
const livesContainer = document.querySelector(".player-lives-container");
const gameContainer = document.getElementById("game-container");

const monsterList = [];
let playerLives = 3;
let gameOverState = false;
livesContainer.innerHTML = playerLives;

const player = new Player(gameContainer);

const gameState = {
  gameOver: "GAME OVER",
  gameWon: "YOU WON!",
};

const gameFinal = function (state) {
  if (state == "gameOver") {
    alert("You`ve lost all your lives! GAME OVER");
    livesContainer.innerHTML = 0;
  }

  const gameText = document.createElement("div");
  gameText.innerHTML = gameState[state];
  gameText.classList.add("game-state");
  gameContainer.replaceChildren(gameText);
  gameOverState = true;
};

document.addEventListener("keydown", function (event) {
  if (event.code === "ArrowDown") player.moveDown();
  if (event.code === "ArrowLeft") player.moveLeft();
  if (event.code === "ArrowRight") player.moveRight();
  if (event.code === "ArrowUp") player.moveUp();

  checkColision();
});

for (let i = 0; i < 10; i++) {
  const monster = new Monster(gameContainer);
  monsterList.push(monster);
}

setInterval(function () {
  monsterList.forEach((monster) => moveMonster(monster));
}, 100);

const moveMonster = function (myMonster) {
  const movement = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"];

  const randomIndex = Math.floor(Math.random() * movement.length);
  const randomMove = movement[randomIndex];

  if (randomMove === "ArrowDown") myMonster.moveDown();
  if (randomMove === "ArrowLeft") myMonster.moveLeft();
  if (randomMove === "ArrowRight") myMonster.moveRight();
  if (randomMove === "ArrowUp") myMonster.moveUp();
  checkColision();
};

const checkColision = function () {
  monsterList.forEach((monster) => {
    const monsterTop = parseInt(monster.element.style.top);
    const playerTop = parseInt(player.element.style.top);
    const monsterLeft = parseInt(monster.element.style.left);
    const playerLeft = parseInt(player.element.style.left);

    if (gameOverState) return;

    if (playerTop === 360 && playerLeft === 340) gameFinal("gameWon");

    if (
      (monsterTop === playerTop + 30 &&
        monsterLeft <= playerLeft + 30 &&
        monsterLeft >= playerLeft - 30) ||
      (monsterLeft === playerLeft + 30 &&
        monsterTop >= playerTop - 30 &&
        monsterTop <= playerTop + 30) ||
      (monsterLeft === playerLeft - 30 &&
        playerTop >= monsterTop - 30 &&
        playerTop <= monsterTop + 30) ||
      (monsterTop === playerTop - 30 &&
        playerLeft <= monsterLeft + 30 &&
        playerLeft >= monsterLeft - 30)
    ) {
      playerLives--;
      livesContainer.innerHTML = playerLives;
      if (playerLives > 0) {
        alert(
          `Upss! The monster caught you! 😬. You have ${playerLives} ${
            playerLives !== 1 ? "lives" : "live"
          } left.`
        );
        player.element.style.top = "0px";
        player.element.style.left = "0px";
        return;
      }

      if (playerLives === 0) {
        gameFinal("gameOver");
      }
    }
  });
};
