var $theList = $('#the-list li');

function highlight() {
  var $this = $(this);

var $selected = $('.red');
    $selected.removeClass('red');

  $this.addClass('red');
}


$theList.on('click', highlight);
