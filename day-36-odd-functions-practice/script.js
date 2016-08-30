'use strict';

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(a, b) {
    if(a > b) {
      return a;
    }
    else {
      return b;
    }

}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(a,b,c){
  var largest = Math.max(a, b, c);

  return largest;
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    var character = char;
    if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u') {
      return true;
    }
    else {
      return false;
    }
}

// ---------------------
// Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
  var newPhrase = '';
    for(var i = 0; i < phrase.length; i++) {
      if (phrase[i] !== 'a' && phrase[i] !== 'e' && phrase[i] !== 'i' && phrase[i] !== 'o' && phrase[i] !== 'u' && phrase[i] !== ' ') {
        var rovarspraketPhrase = newPhrase += phrase[i] + 'o' + phrase[i];
      }
      else {
        var rovarspraketPhrase = newPhrase += phrase[i];
      }
    }
    return rovarspraketPhrase;
}

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(integers){
    var sum = 0;
    for(var i = 0; i < integers.length; i++) {
      sum += integers[i];
    }

    return sum;
}

function multiply(integers){
    var sum = 1;

    for(var i = 0; i < integers.length; i++) {
      sum *=  integers[i];
    }

    return sum;
}

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(phrase){
  var reversePhrase = '';
    for(var i = phrase.length-1; i >= 0; i--) {
       reversePhrase += phrase[i];
    }
    return reversePhrase;
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
  var wordArray = words.split(' ');
  var letterCount = 0;

    for(var i = 0; i < wordArray.length; i++) {
      if(wordArray[i].length > letterCount) {
        letterCount = wordArray[i].length;
      }
    }
    return letterCount;

}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
  var wordArray = words.split(' ');
  var letterCount = i;
  var newArray = [];

    for(var i = 0; i < wordArray.length; i++) {
      if(wordArray[i].length > letterCount) {
        newArray.push(wordArray[i]);
      }
    }
    return newArray;
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string) {
  var frequency = {};
  for(var i = 0; i < string.length; i++) {
    var character = string[i];
    if(frequency[character]) {
      frequency[character]++;
    }
    else {
      frequency[character] = 1;
    }
  }
  return frequency;
}
