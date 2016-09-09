'use strict';

if (window.DataManipulator === undefined) window.DataManipulator = {};

(function(DataManipulator) {

  function sumFunction(integers) {
    var sum = 0;
    for(var i = 0; i < integers.length; i++) {
       sum += integers[i];
    }

    return sum;
  }

  function sumOver10(integers) {
    return sumOverN(integers, 10);
  }

  function sumOverN(integers, n) {
    var sum = 0;

    for(var i = 0; i < integers.length; i++) {
      if(integers[i] > n) {
        sum += integers[i];
      }
    }

    return sum;
  }





  DataManipulator.sum = sumFunction; //makes our .sum available to our tests.js.
  DataManipulator.sumOfNumbersOver10 = sumOver10;
  DataManipulator.sumOfNumbersOverN = sumOverN;


})(window.DataManipulator);
