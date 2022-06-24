const bdyWeightInput = document.querySelector("#bodyweight");
const heightInput = document.querySelector("#height");
const displayBMI = document.querySelector("#result-BMI");
const btnReset = document.querySelector(".btn-reset");
const btnFemale = document.querySelector(".btn-female");
const btnMale = document.querySelector(".btn-male");

const displayMsg = {
  0: "underweight",
  1: "normal",
  2: "overweight",
  3: "obese",
};

let gender = "Gender not selected!";
let sort = true;

const btnGenderSort = function () {
  if (sort && gender == "female") {
    btnFemale.classList.add("btn-clicked");
    btnMale.classList.remove("btn-clicked");
    updateValue();
  } else {
    btnMale.classList.add("btn-clicked");
    btnFemale.classList.remove("btn-clicked");
    updateValue();
  }
  sort != sort;
};

const updateValue = function () {
  let message;
  const result =
    parseFloat(bdyWeightInput.value) /
    (parseFloat(heightInput.value) * parseFloat(heightInput.value));

  if (bdyWeightInput.value || heightInput.value) {
    if (result < 18.5) message = 0;
    else if (result >= 18.5 && result < 25) message = 1;
    else if (result >= 25 && result < 30) message = 2;
    else if (result > 30) message = 3;
    const finalResult = `| ${result.toFixed(2)}`;
    const finalMsg = `| ${displayMsg[message]}`;
    displayBMI.textContent = `${gender} ${result ? finalResult : " "} ${
      result ? finalMsg : " "
    } `;
  } else if (bdyWeightInput.value == "" && heightInput.value == "") {
    displayBMI.textContent = gender;
  }
};

const resetInput = function () {
  heightInput.value = "";
  bdyWeightInput.value = "";
  displayBMI.innerHTML = "";
  gender = "Gender not selected!";
  btnFemale.classList.remove("btn-clicked");
  btnMale.classList.remove("btn-clicked");
};

btnFemale.addEventListener("click", function () {
  gender = "female";
  btnGenderSort();
});

btnMale.addEventListener("click", function () {
  gender = "male";
  btnGenderSort();
});

bdyWeightInput.addEventListener("input", updateValue);
heightInput.addEventListener("input", updateValue);

btnReset.addEventListener("click", resetInput);
