var $clickMe = $('.click-me');
var $button = $('button');
var $theList = $('ul');


function green() {
  $clickMe.toggleClass('toggled');
}

function showHide() {
  $theList.toggleClass('hidden-list');
}



$clickMe.on('click',green);
$button.on('click', showHide);
