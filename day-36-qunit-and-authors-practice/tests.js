
QUnit.test( 'count of authors who wrote in Arabic', function( assert ) {
  var filtered = QUnitPractice.arabicAuthorsCount();
  assert.deepEqual(filtered, 3, 'Should have returned three results.' );
});

QUnit.test( 'Count the number of English writers', function( assert ) {
  var filtered = QUnitPractice.englishAuthorsCount();
  assert.deepEqual(filtered, 8, 'Should have returned eight results.' );
});

QUnit.test( 'Count the number of Russian writers', function( assert ) {
  var filtered = QUnitPractice.russianAuthorsCount();
  assert.deepEqual(filtered, 1, 'Should have returned one results.' );
});

QUnit.test( 'Count the number of authors who wrote over 500 books', function( assert ) {
  var filtered = QUnitPractice.over500();
  assert.deepEqual(filtered, 5, 'Should have returned five results.' );
});

QUnit.test( 'The author with the most published works', function( assert ) {
  var filtered = QUnitPractice.mostWorks();
  assert.deepEqual(filtered, 'Jacob Neusner', 'Should have returned Jacob Neusner.' );
});

QUnit.test( 'Count of the authors whose name begins with the letter A', function( assert ) {
  var filtered = QUnitPractice.letterA();
  assert.deepEqual(filtered, 3, "Not the right number" );
});

QUnit.test( ' Count of the authors whose name begins with the letter K', function( assert ) {
  var filtered = QUnitPractice.letterK();
  assert.deepEqual(filtered, 1, "Not the right number" );
});

QUnit.test( 'Compute the average number of published works', function( assert ) {
  var filtered = QUnitPractice.averagePublished();
  assert.deepEqual(filtered, 436, "Not the right number" );
});

QUnit.test( 'Compute the average number of published works by English authors', function( assert ) {
  var filtered = QUnitPractice.averageEnglishBooksPublished();
  assert.deepEqual(filtered, 574, "Not the right number" );
});

QUnit.test( 'Compute the average number of published works by Japanese authors', function( assert ) {
  var filtered = QUnitPractice.averageJapaneseBooksPublished();
  assert.deepEqual(filtered, 58, "Not the right number" );
});
