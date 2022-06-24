const animalsList = document.getElementById("animals");
const getImg = document.querySelector("#btn-getImg");
const img = document.querySelector("#image");

const apiCall = async function (url, property) {
  const response = await fetch(url);
  const data = await response.json();
  img.src = data[property];
  img.alt = "The image could not be loaded";
};

const getNewImg = function () {
  const userChoice = animalsList.options[animalsList.selectedIndex].text;

  if (userChoice == "Cat") {
    apiCall("https://aws.random.cat/meow", "file");
  } else if (userChoice == "Dog") {
    apiCall("https://random.dog/woof.json", "url");
  } else if (userChoice == "Fox") {
    apiCall("https://randomfox.ca/floof/", "image");
  }
};

getImg.addEventListener("click", getNewImg);
