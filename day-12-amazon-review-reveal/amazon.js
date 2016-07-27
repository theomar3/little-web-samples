var readMore = document.querySelector('a');
var hiddenDiv = document.querySelector('.hidden');

readMore.addEventListener('click', function(){
  hiddenDiv.classList.toggle('expand');

});
