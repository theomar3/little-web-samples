var transformerList = document.querySelector('.transformer-list');


function expandFunc(evt) {
  var currentParentIsExpanded = evt.target.parentNode.parentNode.classList.contains('expand');
  console.log('currentParentIsExpanded', currentParentIsExpanded);
  if (currentParentIsExpanded){
    evt.target.parentNode.parentNode.classList.remove('expand');
    return;
  }

  var selected = document.querySelector('.expand');
  if (selected !== null) {
    selected.classList.remove('expand');
  }
  evt.target.parentNode.parentNode.classList.add('expand')

}



transformerList.addEventListener('click', expandFunc);
