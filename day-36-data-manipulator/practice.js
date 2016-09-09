function sum(integers) {
  var sum = integers.reduce(reduceSum, 0);

  function reduceSum(previousTotal, currentTotal) {
    return previousTotal += currentTotal;
  }

  return sum;
}

var add = sum([3, 19, 9, 31]);
// console.log(add);

function filterNumbersOverN(integers, n) {
  var overN = integers.filter(function(number) {
    return number > n;
  });

  return overN;
}

var overN = filterNumbersOverN([23, 8, 24, 33, 1, 90, 45], 24);
// console.log(overN);

function sumOfNumbersOverN() {
  return sum(overN);
}

var sumOverN = sumOfNumbersOverN();
console.log(sumOverN);
