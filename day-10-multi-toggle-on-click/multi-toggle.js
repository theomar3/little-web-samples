
var bob = document.querySelector('div');
var sue = document.querySelector('.sue');
var fred = document.querySelector('.fred');
var jack = document.querySelector('.jack');
var dean = document.querySelector('.dean');

function greenZero() {
 bob.classList.toggle('on');
}

function greenOne() {
 sue.classList.toggle('on');
}

function greenTwo() {
 fred.classList.toggle('on');
}

function greenThree() {
 jack.classList.toggle('on');
}

function greenFour() {
 dean.classList.toggle('on');
}

bob.addEventListener('click', greenZero);
sue.addEventListener('click', greenOne);
fred.addEventListener('click', greenTwo);
jack.addEventListener('click', greenThree);
dean.addEventListener('click', greenFour);
