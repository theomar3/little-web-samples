var $nameFilter = $('#name-filter');
var $theList = $('#the-list');

var fullMetal = [
  'King Bradley',
  'Ed',
  'Al',
  'Envy',
];

function createDomForArray(array){
  $theList.html('');
  for(var i = 0; i < array.length; i++ ) {
    var arrayList = array[i];
    var listItems = $('<li></li>').text(arrayList);
    $theList.append(listItems);
  }
}

function filterListByName(array, queryValue) {
  var result = [];

  for(var i=0; i < array.length; i++) {
    if(array[i].indexOf(queryValue) > -1){
      result.push(array[i]);
    }
  }
  return result;
}

function keyUpHappened() {
  var value = $nameFilter.val();

  var filtered = filterListByName(fullMetal, value);
  createDomForArray(filtered);
}

function filter() {
  $theList;

  createDomForArray(fullMetal);

  $nameFilter;
  $nameFilter.on('keyup', keyUpHappened);
}

filter();
