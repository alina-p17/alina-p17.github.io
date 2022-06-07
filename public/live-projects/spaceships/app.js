import Spaceship from "./spaceship.js";

const addSpaceship = document.getElementById("add-spaceship");

const handleSpaceshipClick = (activeSpaceship) => {
  for (const spaceship of spaceshipList) {
    if (spaceship !== activeSpaceship) {
      spaceship.stopSpaceship = true;
    }
  }
};
const spaceshipRed = new Spaceship("red", handleSpaceshipClick);
const spaceshipBlue = new Spaceship("blue", handleSpaceshipClick);
const spaceshipGreen = new Spaceship("green", handleSpaceshipClick);

const spaceshipList = [spaceshipRed, spaceshipBlue, spaceshipGreen];

addSpaceship.addEventListener("click", () => {
  const spaceships = document.querySelector("#spaceships");
  const userChoice = spaceships.options[spaceships.selectedIndex].text;
  const spaceship = new Spaceship(`${userChoice}`, handleSpaceshipClick);
  spaceshipList.push(spaceship);
});

document.addEventListener("keydown", function (event) {
  if (event.code === "ArrowRight") {
    spaceshipList.forEach((spaceship) => {
      spaceship.moveRight();
    });
  }
  if (event.code === "ArrowLeft") {
    spaceshipList.forEach((spaceship) => {
      spaceship.moveLeft();
    });
  }
  if (event.code === "ArrowUp") {
    spaceshipList.forEach((spaceship) => {
      spaceship.moveTop();
    });
  }

  if (event.code === "ArrowDown") {
    spaceshipList.forEach((spaceship) => {
      spaceship.moveBottom();
    });
  }
});
