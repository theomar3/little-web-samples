console.log('loaded');

var theList = document.querySelector("#the-list");
console.log(theList);

function createListItem(food){
  console.log("called createListItem");

  var newListItem = document.createElement('li');
  newListItem.textContent = food;
  theList.appendChild(newListItem);
}

// createListItem("fish taco");
// createListItem('guacomole');
// createListItem('rice');

var food = ["shrimp", "fried rice", "steak", "lobster", "chicken curry"];

for (var i = 0; i < food.length; i++){
  createListItem(food[i]);
}




// var newListItem = document.createElement('li');
// newListItem.textContent = "fish tacos";
// theList.appendChild(newListItem);
