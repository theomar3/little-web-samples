

var $showList = $('.transformer-list li');

function expandFunc() {
  var $this = $(this);

  var $selected = $('.expand');

  $selected.removeClass('expand');

  $this.addClass('expand');
}

$showList.on('click', expandFunc);
