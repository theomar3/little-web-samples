var upBtn = document.querySelector('.upBtn');
var downBtn = document.querySelector('.downBtn');
var number = document.querySelector('.number');
var value = 0;

number.textContent = value;




function increaseNum () {

  if (value >= 10) {
    value = 10;
    return;
  }

  value++;
  number.textContent = value;

}

function decreaseNum () {


  if (value <= 0) {
    value =0 ;
    return;
  }

  value--;
  number.textContent = value;

}



upBtn.addEventListener('click', increaseNum);


downBtn.addEventListener('click', decreaseNum);
