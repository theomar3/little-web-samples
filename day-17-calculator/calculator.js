
var input1 = document.querySelector('.upperInput');
var input2 = document.querySelector('.lowerInput');
var addButton = document.querySelector('.addButton');
var subtButton = document.querySelector('.subtButton');
var multButton = document.querySelector('.multButton');
var diviButton = document.querySelector('.diviButton');
var output = document.querySelector('.output');

function addFunc(){
  var value1 = parseInt(input1.value);
  var value2 = parseInt(input2.value);
  var result = value1 + value2;
  output.textContent = result;
}

function subFunc(){
  var value1 = parseInt(input1.value);
  var value2 = parseInt(input2.value);
  var result = value1 - value2;
  output.textContent = result;
}

function multFunc(){
  var value1 = parseInt(input1.value);
  var value2 = parseInt(input2.value);
  var result = value1 * value2;
  output.textContent = result;
}

function diviFunc(){
  var value1 = parseInt(input1.value);
  var value2 = parseInt(input2.value);
  var result = (value1) / (value2);
  output.textContent = result;
}



addButton.addEventListener('click', addFunc);
subtButton.addEventListener('click', subFunc);
multButton.addEventListener('click', multFunc);
diviButton.addEventListener('click', diviFunc);
