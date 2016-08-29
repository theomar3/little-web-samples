//Qunit structure

// QUnit.test('Test a thing', function( assert ) {
//   //call code
//   assert.equal(1, 2, 'Sample test.' );
// });


//Create a function that will sum any array of integers
QUnit.test('Sum function which sums array of integers', function(assert) {
  var integers = [3, 19, 9, 31];
  var result = DataManipulator.sum(integers);
  assert.equal(result, 62, 'The sum was incorrect.')
});

QUnit.test('sumOfNumbersOver10 which can sum array of integers, ignoring small numbers', function(assert) {
  var integers = [2, 29, 4, 56, 3, 78];
  var result = DataManipulator.sumOfNumbersOver10(integers);
  assert.equal(result, 163, 'Sum of large numbers is incorrect');
});

QUnit.test('sumOfNumbersOverN which can sum array of integers over whatever number(n) I pass in', function(assert) {
  var integers = [23, 8, 24, 33, 1, 90, 45];
  var result = DataManipulator.sumOfNumbersOverN(integers, 24);
  assert.equal(result, 168, 'Sum of numbers of N is wrong.');
});
