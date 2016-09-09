

var p = document.querySelector("p");
console.log(p);
p.textContent = "hello class!";

var listItems = document.querySelectorAll('li');
console.log('the list items', listItems);

var first = listItems[0];
console.log('the first', first);

first.textContent = 'I changed this.'
