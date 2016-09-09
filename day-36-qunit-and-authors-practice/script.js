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

  function languageOfAuthors(array, language) {
    var AuthorsWhoWriteIn = array.filter(filterLanguages);

    function filterLanguages(author) {
      return author.language === language;
    }

    return AuthorsWhoWriteIn;
  }

  function arabicAuthorsCount() {

    var arabicAuthors = languageOfAuthors(authors, 'Arabic');
    return arabicAuthors.length;
  }


  function englishAuthorsCount() {
    var englishAuthors = languageOfAuthors(authors, 'English');
    return englishAuthors.length;
  }

  function russianAuthorsCount() {
    var russianAuthors = languageOfAuthors(authors, 'Russian');
    return russianAuthors.length;

  }

  function countOfAuthorsWhoWroteOverNBooks(array, n) {
    var overNBooks = array.filter(filterNBooks);

    function filterNBooks(author) {
      return author.publishedWorks > n;
    }
    return overNBooks.length;
  }

  function mostWorks() {
    var authorName;
    var workCount = 0;

    authors.forEach(function(author) {
      if(author.publishedWorks > workCount) {
        workCount = author.publishedWorks;
        authorName = author.name;
      }
    });
    return authorName;
  }

  function findAuthorByFirstLetter(array, letter) {
    var firstLetter = array.filter(filterFirstLetter);

    function filterFirstLetter(author) {
      return author.name.indexOf(letter) === 0;
    }
    return firstLetter.length;
  }

  function letterA() {
    return findAuthorByFirstLetter(authors, 'A');
  }

  function letterK() {
    return findAuthorByFirstLetter(authors, 'K');

  }

  function totalPublishedWorks(array) {
    var total = array.reduce(reduceSum, 0);

    function reduceSum(previousTotal, currentTotal) {
      return previousTotal += currentTotal.publishedWorks;
    }
    return total;
  }

  function averagePublished(array) {
    return totalPublishedWorks(authors) / authors.length;
  }

  function averageByLanguage(array, language) {
    var authorsByLanguage = languageOfAuthors(array, language);
    var publishedWorksCountByLanguage = totalPublishedWorks(authorsByLanguage);

    return publishedWorksCountByLanguage / authorsByLanguage.length;
  }


  function averageEnglishBooksPublished() {
    return averageByLanguage(authors, 'English');
  }

  function averageJapaneseBooksPublished() {
    return averageByLanguage(authors, 'Japanese');
  }



  context.arabicAuthorsCount = arabicAuthorsCount;
  context.englishAuthorsCount = englishAuthorsCount;
  context.russianAuthorsCount = russianAuthorsCount;
  context.countOfAuthorsWhoWroteOverNBooks = countOfAuthorsWhoWroteOverNBooks;
  context.mostWorks = mostWorks;
  context.letterA = letterA;
  context.letterK = letterK;
  context.averagePublished = averagePublished;
  context.averageEnglishBooksPublished = averageEnglishBooksPublished;
  context.averageJapaneseBooksPublished = averageJapaneseBooksPublished;

})(window.QUnitPractice);
