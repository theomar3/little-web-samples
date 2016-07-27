var theList = document.querySelector('#the-list');

var people = ['Bob', 'Sue', 'Fred', 'Jack', 'Dean'];

//Add code here.

for (var i = 0; i < people.length; i++) {
  var friends = people[i];

  var li = document.createElement('li');
  li.textContent = friends;
  theList.appendChild(li);
}


theList.addEventListener('click', function(evt){
  if (evt.target.tagName === 'LI') {
    evt.target.classList.toggle('green');
  }
console.log(evt.target.tagName);
});
