var heroForm = document.querySelector(".hero form");
var heroInput = document.querySelector("#dog-name");
var heroText = document.querySelector(".hero h1 strong");


heroForm.addEventListener("submit", displayDogName);

function displayDogName(event) {
  event.preventDefault();
  var dogName = heroInput.value;
  heroText.innerText = dogName;
}
