var $p = $('.the-paragraph');

function textChange() {
  $p.text('Ouch! That click hurt!');
}

$p.on('click', textChange);
