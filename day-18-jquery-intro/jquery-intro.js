// game

var $guessButton = $('#guess-button');
var $theNumberInput = $('#the-number');
var $output = $('#output');
var $reset = $('#reset');

var randomNumber = Math.ceil(Math.random() * 10);
var guessCount = 0;


function endGame() {
  $reset.show();
}

function guessed() {
  guessCount++;

  var valueGuessed = $theNumberInput.val();
  valueGuessed = parseInt(valueGuessed);

  if(valueGuessed === randomNumber) {
    $output.html("You are a winner!");
    endGame();
  }
  else {
    if(guessCount === 3) {
      $output.html('you lose');
      endGame();
    }
    else if (valueGuessed < randomNumber) {
      $output.html('higher');
    }
    else {
      $output.html('lower');
    }
  }

}

function resetGame() {
   randomNumber = Math.ceil(Math.random() * 10);
   guessCount = 0;

   $output.html('');
   $theNumberInput.val('');
   $reset.hide();
}

$guessButton.on('click', guessed);
$reset.on('click', resetGame);



// list

var listItems = $('#hobbies li');

listItems.on('click', function() {
  // 'this' is the DOM element you clicked on. Same as evt.target. 
  var $this = $(this);

  $this.css('font-size', '40px');
  // $(this).hide();

  $('body').css('background-color', 'black');
});
