var theList = document.querySelector('#the-list');

theList.addEventListener('click', function(evt){

  //Find and de-select any currently selected list items
  var currentLI = document.querySelector('.red');
  console.log(currentLI);

  if (currentLI === null) {
    //do nothing
    console.log('there was nothing currently selected, so not removing a class')
  }
  else {
    console.log('there was something selected, so now removing the red class')
    currentLI.classList.remove('red');

  }

  //select current list item
  console.log('adding the red class to the newly selected item')
  evt.target.classList.add('red')

});
