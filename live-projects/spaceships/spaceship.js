class Spaceship {
  constructor(color, onSpaceshipClick) {
    const spaceshipsContainer = document.querySelector(".spaceships-container");
    const spaceshipImg = document.createElement("img");
    spaceshipImg.src = `./images/${color}-spaceship.png`;

    spaceshipImg.style.width = "80px";
    spaceshipImg.style.position = "relative";
    spaceshipImg.style.top = "0";
    spaceshipImg.style.left = "0";

    this.stopSpaceship = true;
    spaceshipImg.addEventListener("click", () => {
      this.stopSpaceship = !this.stopSpaceship;
      onSpaceshipClick(this);
    });

    this.spaceshipEl = spaceshipImg;
    spaceshipsContainer.appendChild(spaceshipImg);
  }

  moveRight() {
    if (this.stopSpaceship == false) {
      const oldLeft = parseInt(this.spaceshipEl.style.left);
      this.spaceshipEl.style.left = oldLeft + 10 + "px";
      this.spaceshipEl.classList.remove("rotated-left");
    }
  }
  moveLeft() {
    if (this.stopSpaceship == false) {
      const oldLeft = parseInt(this.spaceshipEl.style.left);

      this.spaceshipEl.style.left = oldLeft - 10 + "px";
      this.spaceshipEl.classList.add("rotated-left");
    }
  }
  moveTop() {
    if (this.stopSpaceship == false) {
      const oldTop = parseInt(this.spaceshipEl.style.top);
      this.spaceshipEl.style.top = oldTop - 10 + "px";
    }
  }
  moveBottom() {
    if (this.stopSpaceship == false) {
      const oldTop = parseInt(this.spaceshipEl.style.top);
      this.spaceshipEl.style.top = oldTop + 10 + "px";
    }
  }
}

export default Spaceship;
