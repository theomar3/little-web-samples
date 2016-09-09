var $paragraph = $('.editable');
var $saveButton = $('.save');
var $cancelButton = $('.cancel');
var $div = $('.editor');

function editText() {
  $div.toggleClass('show');
  $paragraph.toggleClass('hide');
}

function saveText() {
  var $textBox = $('.text-edit');
  var newParagraph = $textBox.val();

  $paragraph.html(newParagraph);

  $div.toggleClass('show');
  $paragraph.toggleClass('hide');



}

function cancelText() {
  $div.toggleClass('show');
  $paragraph.toggleClass('hide');
}


$paragraph.on('click', editText);
$saveButton.on('click', saveText);
$cancelButton.on('click', cancelText);
