var $theList = $('#the-list');

var people = ['Bob', 'Sue', 'Fred', 'Jack', 'Dean'];

for(var i =0; i < people.length; i++) {
  $theList.append('<li>' + people[i] + '</li>');
}

function highlight() {
  var $this = $(this);



  $this.toggleClass('green');
}

$theList.on('click', 'li', highlight);
