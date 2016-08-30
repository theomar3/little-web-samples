QUnit.test('Get the largest of 2 numbers ', function( assert ) {
  var a = 10;
  var b = 70;
  var result = max(a, b);
  assert.equal(result, 70, 'Largest number is incorrect.' );
});

QUnit.test('Get the largest of 3 numbers ', function( assert ) {
  var a = 10;
  var b = 70;
  var c = 50;
  var result = max(a, b, c);
  assert.equal(result, 70, 'Largest number is incorrect.' );
});

QUnit.test('Is the letter a vowel?', function( assert ) {
  var result = isVowel('a');
  assert.equal(result, true, 'Character is not a vowel.' );
});

QUnit.test('Translate sentence to roverspraket', function( assert ) {
  var result = rovarspraket('this is fun');
  assert.equal(result, 'tothohisos isos fofunon', 'This is not correct roverspraket.' );
});

QUnit.test('add the integers', function( assert ) {
  var integers = [3, 6, 9, 12];
  var result = sum(integers);
  assert.equal(result, 30, 'This is not correct.' );
});

QUnit.test('multiply the integers', function( assert ) {
  var integers = [3, 6, 9, 12];
  var result = multiply(integers);
  assert.equal(result, 1944, 'This is not correct.' );
});

QUnit.test('reverse the string', function( assert ) {
  var result = reverse('jag testar');
  assert.equal(result, 'ratset gaj', 'This is not the reverse of the phrase.' );
});

QUnit.test('longest word and its length', function( assert ) {
  var words = 'A long time ago, in a galaxy far far away.';
  var result = findLongestWord(words);
  assert.equal(result, 6, 'This is not the length of the longest word.' );
});

QUnit.test('words that are longer than i', function( assert ) {
  var words = 'A long time ago in a galaxy far far away';
  var result = filterLongWords(words, 3);
  assert.deepEqual(result, ['long', 'time', 'galaxy', 'away'], 'These are not longer than i' );
});

QUnit.test('how many times does a letter show up in a word', function( assert ) {
  var string = 'happy';
  var result = charFreq(string);
  // assert.equal(result.h, 1);
  // assert.equal(result.a, 1);
  // assert.equal(result.p, 2);
  // assert.equal(result.y, 1);
  assert.deepEqual(result,
    {
    h:1,
    a:1,
    p:2,
    y:1
  }
);
});
