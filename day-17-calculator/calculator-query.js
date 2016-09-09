var $input1 = $('.upperInput');
var $input2 = $('.lowerInput');
var $addButton = $('.addButton');
var $subtButton = $('.subtButton');
var $output = $('.output');

function addFunc() {
  var value1 = parseInt($input1.val());
  var value2 = parseInt($input2.val());

  var result = value1 + value2;

  $output.html(result);
}

function addFunc() {
  var value1 = parseInt($input1.val());
  var value2 = parseInt($input2.val());

  var result = value1 + value2;

  $output.html(result);
}

function subFunc() {
  var value1 = parseInt($input1.val());
  var value2 = parseInt($input2.val());

  var result = value1 - value2;

  $output.html(result);
}





$addButton.on('click', addFunc);
$subtButton.on('click', subFunc);
