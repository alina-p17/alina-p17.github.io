import ElementMove from "./ElementMove.js";

class Player extends ElementMove {
  static createElement() {
    const player = document.createElement("img");
    player.style.top = "0px";
    player.style.left = "0px";
    player.src = "./mario-running-right.png";
    player.classList.add("player");
    return player;
  }

  constructor(container) {
    super();
    this.element = Player.createElement();
    container.appendChild(this.element);
  }
}

export default Player;
