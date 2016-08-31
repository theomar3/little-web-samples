// 'use strict';

'use strict';
if (this.QUnitPractice === undefined) this.QUnitPractice = {};

(function(context) {


  var authors = [
    { name: 'Andrew Murray', language: 'English', publishedWorks: 240 },
    { name: 'Muhammad Muhiyyudin Ibn ul Arabi', language: 'Arabic', publishedWorks: 240 },
    { name: 'Jallaludin Suyuti', language: 'Arabic', publishedWorks: 700 },
    { name: 'Abu Hamid Al Ghazali', language: 'Arabic', publishedWorks: 200 },
    { name: 'Isaac Asimov', language: 'English', publishedWorks: 506 },
    { name: 'Jacob M. Appel', language: 'English', publishedWorks: 200 },
    { name: 'Meish Goldish', language: 'English', publishedWorks: 300 },
    { name: 'Kyokutei Bakin', language: 'Japanese', publishedWorks: 470 },
    { name: 'Ursula Bloom', language: 'English', publishedWorks: 500 },
    { name: 'Enid Blyton', language: 'English', publishedWorks: 600 },
    { name: 'Barbara Cartland', language: 'English', publishedWorks: 722 },
    { name: 'Darya Dontsova', language: 'Russian', publishedWorks: 140 },
    { name: 'Alexandre Dumas', language: 'French', publishedWorks: 277 },
    { name: 'Jacob Neusner', language: 'English', publishedWorks: 950 },
    { name: 'Georges Simenon', language: 'French', publishedWorks: 500 }
  ];

  function arabicAuthorsCount() {
    var filteredAuthors = [];

    for (var author of authors) {
      if (author.language === 'Arabic') {
        filteredAuthors.push(author);
      }
    }

    return filteredAuthors.length;
  }

  function englishAuthorsCount() {
    var filteredAuthors = [];

    for(var author of authors) {
      if(author.language === "English") {
        filteredAuthors.push(author);
      }
    }
    return filteredAuthors.length;

  }

  function russianAuthorsCount() {
    var filteredAuthors = [];

    for(var author of authors) {
      if(author.language === "Russian") {
        filteredAuthors.push(author);
      }
    }
    return filteredAuthors.length;
  }

  function over500() {
    var filteredAuthors = [];

    for(var author of authors) {
      if(author.publishedWorks > 500) {
        filteredAuthors.push(author);
      }
    }
    return filteredAuthors.length;
  }

  function mostWorks() {
    var authorName;
    var workCount = 0;

    for (var author of authors) {
      if(author.publishedWorks > workCount) {
        workCount = author.publishedWorks;
        authorName = author.name;
      }
    }
    return authorName;
  }

  function letterA() {
    var aNames = [];
    for(var author of authors) {
      if(author.name.indexOf('A') === 0)
      aNames.push(author.name);
    }
    return aNames.length;
  }

  function letterK() {
    var kNames = [];
    for(var author of authors) {
      if(author.name.indexOf('K') === 0)
      kNames.push(author.name);
    }
    return kNames.length;
  }

  function averagePublished() {
    var total = 0;
    for(var author of authors) {
      var booksPublished = author.publishedWorks;
      var totalBooks = total += booksPublished;
      var totalAuthors = authors.length;
    }
    var average = Math.floor(totalBooks / totalAuthors);
    return average;
  }

  function averageEnglishBooksPublished() {
    var total = 0;
    for(var author of authors) {
      if(author.language === "English") {
        var booksPublished = author.publishedWorks;
        var totalBooks = total += booksPublished;
        var totalEnglishAuthors = author.language.length;
      }
    }
    var average = Math.floor(totalBooks / totalEnglishAuthors);
    return average;
  }

  function averageJapaneseBooksPublished() {
    var total = 0;
    for(var author of authors) {
      if(author.language === "Japanese") {
        var booksPublished = author.publishedWorks;
        var totalBooks = total += booksPublished;
        var totalJapaneseAuthors = author.language.length;
      }
    }
    var average = Math.floor(totalBooks / totalJapaneseAuthors);
    return average;
  }



  context.arabicAuthorsCount = arabicAuthorsCount;
  context.englishAuthorsCount = englishAuthorsCount;
  context.russianAuthorsCount = russianAuthorsCount;
  context.over500 = over500;
  context.mostWorks = mostWorks;
  context.letterA = letterA;
  context.letterK = letterK;
  context.averagePublished = averagePublished;
  context.averageEnglishBooksPublished = averageEnglishBooksPublished;
  context.averageJapaneseBooksPublished = averageJapaneseBooksPublished;

})(window.QUnitPractice);
