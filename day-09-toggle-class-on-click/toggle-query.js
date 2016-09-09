var $div = $('.click-me');

function highlight() {
  $div.toggleClass('on');
}


$div.on('click', highlight);
