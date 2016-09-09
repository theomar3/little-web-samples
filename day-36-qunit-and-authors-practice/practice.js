


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

  function filterAuthorByLanguage(array, language) {
    var authorByLanguage = array.filter(function(author) {
      return author.language === language;
    });

    return authorByLanguage;
  }

  function countOfArabicAuthors() {
    var arabicAuthors = filterAuthorByLanguage(authors, 'Arabic');

    return arabicAuthors.length;
  }

  function countOfEnglishAuthors() {
    var englishAuthors = filterAuthorByLanguage(authors, 'English');

    return englishAuthors.length;
  }

  function countOfRussianAuthors() {
    var russianAuthors = filterAuthorByLanguage(authors, 'Russian');

    return russianAuthors.length;
  }

  function overNBooks(array, n) {
    var overN = array.filter(function(author) {
      return author.publishedWorks > n;
    });

    return overN;
  }

  var over500 = overNBooks(authors, 500);
  console.log(over500);

  function authorWithMostPublishedBooks(array) {
    var workCount = 0;
    var authorName;

    array.forEach(function(author) {
      if(author.publishedWorks > workCount) {
        workCount = author.publishedWorks;
        authorName = author.name;
      }

      return authorName;
    });
  }

  function filterFirstLetter(array, letter) {
    var firstLetter = array.filter(function(author) {
      return author.name.indexOf(letter) === 0;
    });

    return firstLetter;
  }

  var firstLetterA = filterFirstLetter(authors, 'A');
  return firstLetterA;

  var firstLetterK = filterFirstLetter(authors, 'K');
  return firstLetterK;

  function totalPublishedWorks(array) {
    var totalBooks = array.reduce(reduceSum, 0);

    function reduceSum(previousValue, currentValue) {
      return previousValue += currentValue.publishedWorks;
    }

    return totalBooks;
  }

  function averagePublished() {
    return totalPublishedWorks(authors) / authors.length;
  }

  function averageBooksByLanguage(array, language) {
    var languageAuthors = filterAuthorByLanguage(array, language);

    var languageBooks = languageAuthors.filter(function(author) {
      return author.publishedWorks;
    });

    return languageAuthors / languageBooks.length;
  }

  var averageEnglishBooksPublished = averageBooksByLanguage(authors, 'English');

  var averageJapaneseBooksPublished = averageBooksByLanguage(authors, 'Japanese');
