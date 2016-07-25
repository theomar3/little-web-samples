var myHouse = {
    bedroomCount: 4,
    bathroomCount: 3,
    stories: 2,
    squareFeet: 4000
};

// Adding numbers to the items
var numberOfBedroomsDiv = document.querySelector('#bedrooms');

numberOfBedroomsDiv.textContent = myHouse.bedroomCount;


var numberOfBathroomsSpan = document.querySelector('#number-of-bathrooms');

numberOfBathroomsSpan.textContent = myHouse.bathroomCount;

var numberOfStories = document.querySelector('#stories');

numberOfStories.textContent = myHouse.stories;

var squareFeet = document.querySelector('#squareFeet');

squareFeet.textContent = myHouse.squareFeet;
