var button = document.querySelector(".show-hide button");
var list = document.querySelector(".show-hide ul");

function buttonClicked() {
  console.log("clicked");

  list.classList.toggle('hidden-list');
}

button.addEventListener("click", buttonClicked);
