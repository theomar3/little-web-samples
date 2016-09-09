var $upBtn = $('.upBtn');
var $downBtn = $('.downBtn');
var $number = $('.number');

var value = 0;

$number.html(value);

function increase() {
  value++;

  if(value >= 10){
    value = 10;
  }
  $number.html(value);

}

function decrease() {
  value--;

  if(value <= 0){
    value = 0;
  }
$number.html(value);

}

$upBtn.on('click', increase);
$downBtn.on('click', decrease);
