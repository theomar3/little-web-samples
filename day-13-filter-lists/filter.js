var fullMetal = [
  { name :'King Bradley', age: 70, isGoodGuy: false},
  { name : 'Ed', age: 16, isGoodGuy: true},
  { name : 'Al', power: 15, isGoodGuy: true},
  { name : 'Envy', power: 1000, isGoodGuy: false},

];

// global variable we need for the whole program
var theList;
var nameFilterInput;

// this function can be used for multiple arrays
function createDomForArray(array) {
  // empties out the DOM to a blank string
  theList.innerHTML = '';
  for (var i = 0; i < array.length; i++) {
    // create a li
    var li = document.createElement('li');
    // add the name of the specific array's name text to the li
    li.textContent = array[i].name;
    // attach the li's text content to theList
    theList.appendChild(li)
  }
}

// a function to filter names by queryValue (the letters being typed)
function filterListByName(array, queryValue) {
  // new array for filter
  var result = [];

  for (var i = 0; i < array.length; i++) {
    // if the query (letter typed) is in the name
    if (array[i].name.indexOf(queryValue) > -1) {
      // push/add that filtered array object into the result array
      result.push(array[i]);
    }
  }


 // return the array to be used
  return result;
}

function keyUpHappened() {
  // storing the value from the input into a variable
  var value = nameFilterInput.value;


// storing the function's result into a variable to use it later
  var filtered = filterListByName(fullMetal, value);
  console.log('filtered', filtered);
  // adds in the new filtered array
  createDomForArray(filtered);
}

// main function
function start() {
  // getting the-list from the DOM
   theList = document.querySelector('#the-list');
  //  calling createDomForArray function with array
   createDomForArray(fullMetal);

  //  getting the input from DOM
    nameFilterInput = document.querySelector('#name-filter');
    // adding keyup with keyUpHappened
   nameFilterInput.addEventListener('keyup', keyUpHappened);
}

start();
