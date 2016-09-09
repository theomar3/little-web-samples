function isVowel(character){
    if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u') {
      return true;
    }
    else {
      return false;
    }
}

// Write a function rovarspraket() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".

function rovarspraket(phrase) {
  var newPhrase = '';
  phrase.forEach(function(letter) {
    if(!isVowel(letter) && letter !== ' ') {
      newPhrase = letter + 'o' + letter;
    }
    else {
      newPhrase += letter;
    }
  });

  return newPhrase;
}

// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.

function sum(integers) {
  var totalSum = integers.reduce(reduceSum, 0);

  function reduceSum(previousValue, currentValue) {
    return previousValue += currentValue;
  }

  return totalSum;
}

function multiply(integers) {
  var totalSum = integers.reduce(reduceSum, 1);

  function reduceSum(previousValue, currentValue) {
    return previousValue *= currentValue;
  }

  return totalSum;
}

// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".

function reverse(string) {
  var reversePhrase = '';

  for(var i = string.length-1; i >= 0; i--) {
    reversePhrase += string[i];
  }
  return reversePhrase;
}

// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.

function findLongestWord(sentence) {
  var wordArray = sentence.split(' ');
  var wordLength = 0;

  wordArray.forEach(function(word) {
    if(word.length > wordLength) {
      wordLength = word.Length;
    }
  });

  return wordLength;
}

// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.

function filterLongWords(sentence, i) {
  var wordArray = sentence.split(' ');
  var wordLength = i;
  var newArray = [];

  wordArray.forEach(function(word) {
    if(word.length > wordLength) {
      newArray.push(word);
    }
  });

  return newArray;
}

// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").

function charFreq(string) {
  var frequency = {};
  var letter;

  for(var i = 0; i < string.length; i++) {
    letter = string[i];
    if(letter in frequency) {
      frequency[letter]++;
    }
    else {
      frequency[letter] = 1;
    }
  }

  return frequency;
}
