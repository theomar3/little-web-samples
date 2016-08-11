'use strict';
if (this.ClickTimes === undefined) this.ClickTimes = {};

(function(context) {

  var clickTimes = [];
  var clickLogUlDOM;

  function clicked() {
    var date = new Date();

    //Fix this stuff
    var hours; //get this
    var minutes; //get this
    var seconds; //get this
    var differenceInMilliseconds; //calculate this

    if (clickTimes.length === 0) {
      createListItem(0, hours, minutes, seconds);
    }
    else {
      createListItem(differenceInMilliseconds, hours, minutes, seconds);
    }

    clickTimes.push(date);
  }

  function createListItem(millisecondDiff, hours, minutes, seconds) {
    var li = document.createElement('li');
    li.textContent = millisecondDiff
    + ' - '
    + hours
    + ':'
    + minutes
    + ':'
    + seconds;

    clickLogUlDOM.appendChild(li);
  }

  function start() {

    //Call your code here
    console.log('starting!', context);

    var button = document.querySelector('#click-me');
    clickLogUlDOM = document.querySelector('#click-log');

    button.addEventListener('click', clicked);

  }

  context.start = start;

})(window.ClickTimes);
