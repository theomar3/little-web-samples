var paragraph = document.querySelector('.editable');
var saveButton = document.querySelector('.save');
var cancelButton = document.querySelector('.cancel');
var div = document.querySelector('.editor');

function hidePara() {
  paragraph.classList.toggle('hide');
  div.classList.toggle('show');
}

function saveText() {
  var textArea = document.querySelector('.text-edit');
  paragraph.textContent = textArea.value;
  paragraph.classList.toggle('hide');
  div.classList.toggle('show');

}


function cancelText() {
  paragraph.classList.toggle('hide');
  div.classList.toggle('show');

}


cancelButton.addEventListener('click', cancelText);
saveButton.addEventListener('click', saveText);
paragraph.addEventListener('click', hidePara);
