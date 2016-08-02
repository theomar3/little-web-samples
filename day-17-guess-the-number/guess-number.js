var button = document.querySelector('#button');
var input = document.querySelector('#input');
var output = document.querySelector('.output');

var inputValue;


var randomNumber = Math.ceil(Math.random() * 10);


function guessFunc() {

inputValue = input.value;

     if(inputValue < randomNumber) {
       output.textContent = "higher";
     }
     else if(inputValue > randomNumber) {
       output.textContent = "lower";
     }
     else {
       output.textContent = "You win!";
     }

};


button.addEventListener('click', guessFunc);
