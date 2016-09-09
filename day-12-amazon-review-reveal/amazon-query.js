var $readMore = $('.read');
var $hiddenDiv = $('.hidden');

function expandFunc() {
  $hiddenDiv.toggleClass('expand');

}

$readMore.on('click', expandFunc);
