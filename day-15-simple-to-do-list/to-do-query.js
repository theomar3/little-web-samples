var $input = $('#the-input');
var $button = $('#the-button');
var $div = $('.target');
var $theList = $('#the-list');


function addToList() {
  var inputValue = $input.val();
  $theList.append('<li>' + inputValue + '</li>');

  
}

$button.on('click', addToList)
