var $theList = $('#the-list');

var food = [
  'shrimp',
  'fried rice',
  'steak',
  'lobster',
  'chicken curry'
];


for (var i = 0; i < food.length; i++) {
  var favFoods = food[i];
  $theList.append('<li>' + favFoods + '</li>');
}
