var $theList = $('#the-list');

var groceryList = [
  'sausage',
  'shrimp',
  'Texjoy',
  'Dr Pepper',
  'steak',
  'Tostitos',
  'cheese',
  'gum'
];

for(var i = 0; i < groceryList.length; i++) {
  var groceries = groceryList[i];
  var listItems = $('<li></li>').text(groceries);
  $theList.append(listItems);
}
