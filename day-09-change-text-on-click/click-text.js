var click = document.querySelector('p');

function textChange() {
  click.textContent = "Stop clicking yourself, stop clicking yourself.";
}

click.addEventListener('click', textChange);
