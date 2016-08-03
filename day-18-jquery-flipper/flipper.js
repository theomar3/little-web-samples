var $leftButton = $('.leftButton');
var $rightButton = $('.rightButton');
var $images = $('img');
var $text = $('p');
var $body = $('body');
var index =0;
var flipper = [
  {
    img:"jon_snow_and_ghost.jpg",
    text:"Jon Snow and Ghost",
    background:"rgba(110, 119, 134, 1.0)"
  },

  {
    img:"team-avengers.jpeg",
    text:"The Avengers",
    background:"rgba(187, 159, 49, 1.0)"
  },

  {
    img:"spawn.jpg",
    text: "Spawn",
    background: "rgba(184, 73, 48, 1.0)"
  },

  {
    img: "team-justice-league.jpg",
    text: "The Justice League",
    background: "rgba(45, 123, 70, 1.0)"
  },
];

function displayFlip(){
  $body.css('background-color', flipper[index].background);
  $images.attr('src', flipper[index].img);
  $text.html(flipper[index].text);

}

displayFlip();


function rightFlip() {
  index++;
  if (index === flipper.length)
  {
    index = 0;
  }
  displayFlip();

}

function leftFlip() {
  index--;
  if (index < 0)
  {
    index = flipper.length-1;
  }

  displayFlip();
}


$rightButton.on('click', rightFlip);
$leftButton.on('click', leftFlip);
