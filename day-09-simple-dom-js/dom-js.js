var click = document.querySelector('.click-me');

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

click.addEventListener('click',toggleClass);
