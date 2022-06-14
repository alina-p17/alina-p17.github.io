class Hangman {
  #wrongGuessArr = [];
  #goodGuessArr = [];
  // prettier-ignore
  #alphabetArr=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  #count;
  constructor(newWord) {
    const hangmanWord = newWord.split("");
    const guessNb = document.querySelector(".guess-left");
    const wrongGuess = document.querySelector(".wrong-guess");
    const lettersContainer = document.querySelector(".letters-container");
    guessNb.innerHTML = "10";
    const wordArr = hangmanWord.map(() => {
      const missingLetters = document.createElement("div");

      missingLetters.classList.add("missing-letters");

      missingLetters.innerText = `_ `;
      lettersContainer.appendChild(missingLetters);

      return missingLetters;
    });

    this.guessNb = guessNb;
    this.wrongGuess = wrongGuess;
    this.hangmanWord = hangmanWord;
    this.wordArr = wordArr;
    this.lettersContainer = lettersContainer;
  }

  #countInArray(array, what) {
    return array.filter((item) => item == what).length;
  }

  checkingLetters(userLetter) {
    this.hangmanWord.forEach((letter, index) => {
      if (userLetter === letter) {
        this.wordArr[index].innerHTML = `${letter}`;
        this.#goodGuessArr.push(userLetter);
      }
      if (this.#goodGuessArr.length === this.hangmanWord.length) {
        this.#userWin();
      }
    });
    if (this.#count != 0) {
      this.#userGuessCheck(userLetter);
    }
  }

  #userGuessCheck(userLetter) {
    if (
      !this.#alphabetArr.includes(userLetter) &&
      parseInt(this.guessNb.innerHTML) > 0
    ) {
      alert(`${userLetter} is not a letter!`);
      return;
    }

    if (
      !this.hangmanWord.includes(userLetter) &&
      parseInt(this.guessNb.innerHTML) >= 1 &&
      userLetter !== ""
    ) {
      this.#wrongGuessArr.push(userLetter);

      const count = this.#countInArray(
        this.#wrongGuessArr,
        userLetter.toLowerCase()
      );
      if (count > 1) {
        alert("You've chosen that letter already!");
        return;
      }

      this.guessNb.innerHTML = parseInt(this.guessNb.innerHTML) - 1;
      this.wrongGuess.innerHTML = ` ${
        this.wrongGuess.innerHTML
      }${userLetter.toLowerCase()}, `;
    }

    this.#userLost();
  }

  #userLost() {
    if (parseInt(this.guessNb.innerHTML) == 0) {
      this.lettersContainer.innerHTML = "YOU LOST!";
      this.lettersContainer.classList.add("game-over");
      this.guessNb.innerHTML = "0";
    }
  }

  #userWin() {
    this.#count = 0;
    this.lettersContainer.innerHTML = `You won! The word was "${this.hangmanWord.join(
      ""
    )}"!😏`;
    this.lettersContainer.classList.add("game-won");
  }
}

export default Hangman;
