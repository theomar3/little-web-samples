var click = document.querySelector('.click-me');
var button = document.querySelector(".show-hide button");
var list = document.querySelector(".show-hide ul");


click.textContent = "Click me now!";

function toggleClass() {
  var containsClass = click.classList.contains('toggled');
  console.log(containsClass);

  if (containsClass === false) {
    click.classList.add("toggled");
  }
  else {
    click.classList.remove('toggled');
  }
}


function buttonClicked() {
  console.log("clicked");

  list.classList.toggle('hidden-list');
}

button.addEventListener("click", buttonClicked);
click.addEventListener('click',toggleClass);
