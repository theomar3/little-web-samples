var theList = document.querySelector('#the-list');

theList.addEventListener('click', function(evt){
  var currentLI = document.querySelector('.red');
  if(currentLI !== null) {
    currentLI.classList.remove('red');
  }


  evt.target.classList.add('red')

});




// var inbox = document.querySelector('#inbox');
// var starred = document.querySelector('#starred');
// var important = document.querySelector('#important');
// var sentMail = document.querySelector('#sent-mail');
// var draft = document.querySelector('#draft');
// var circles = document.querySelector('#circles');
//
//
// function redInbox() {
//   inbox.classList.toggle('red');
//   starred.classList.remove('red');
//   important.classList.remove('red');
//   sentMail.classList.remove('red');
//   draft.classList.remove('red');
//   circles.classList.remove('red');
//
// };
//
// function redStarred() {
//   inbox.classList.remove('red');
//   starred.classList.toggle('red');
//   important.classList.remove('red');
//   sentMail.classList.remove('red');
//   draft.classList.remove('red');
//   circles.classList.remove('red');
//
// };
//
// function redImportant() {
//   inbox.classList.remove('red');
//   starred.classList.remove('red');
//   important.classList.toggle('red');
//   sentMail.classList.remove('red');
//   draft.classList.remove('red');
//   circles.classList.remove('red');
//
// };
//
// function redSentMail() {
//   inbox.classList.remove('red');
//   starred.classList.remove('red');
//   important.classList.remove('red');
//   sentMail.classList.toggle('red');
//   draft.classList.remove('red');
//   circles.classList.remove('red');
//
// };
//
// function redDraft() {
//   inbox.classList.remove('red');
//   starred.classList.remove('red');
//   important.classList.remove('red');
//   sentMail.classList.remove('red');
//   draft.classList.toggle('red');
//   circles.classList.remove('red');
//
// };
//
// function redCircles() {
//   inbox.classList.remove('red');
//   starred.classList.remove('red');
//   important.classList.remove('red');
//   sentMail.classList.remove('red');
//   draft.classList.remove('red');
//   circles.classList.toggle('red');
//
// };
//
// inbox.addEventListener('click', redInbox);
// starred.addEventListener('click', redStarred);
// important.addEventListener('click', redImportant);
// sentMail.addEventListener('click', redSentMail);
// draft.addEventListener('click', redDraft);
// circles.addEventListener('click', redCircles);
