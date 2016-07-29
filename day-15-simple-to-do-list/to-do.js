var input = document.querySelector('#the-input');
var button = document.querySelector('#the-button');
var div = document.querySelector('.target');
var theList = document.querySelector('#the-list');

var add = function(){
  var value = input.value;
  var li = document.createElement('li');



  li.textContent = value;
  theList.appendChild(li);

  input.value = '';
};


button.addEventListener('click', add);
