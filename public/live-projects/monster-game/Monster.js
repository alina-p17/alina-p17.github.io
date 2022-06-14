import ElementMove from "./ElementMove.js";

class Monster extends ElementMove {
  constructor(location) {
    super();
    const monsterImg = document.createElement("img");
    const randomTopAndLeft = this.#getRandom10(80, 350);

    monsterImg.style.top = `${randomTopAndLeft}px`;
    monsterImg.style.left = `${randomTopAndLeft}px`;

    const randomNumber = Math.floor(Math.random() * 11) + 1;

    monsterImg.src = `./monsters/monster${randomNumber}.svg`;
    location.appendChild(monsterImg);
    monsterImg.classList.add("monster");
    this.element = monsterImg;
  }

  #getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  #getRandom10(min, max) {
    return this.#getRandomInt(min / 10, max / 10) * 10;
  }
}

export default Monster;
