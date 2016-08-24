'use strict';
if (this.GuestBook === undefined) this.GuestBook = {};

(function(context) {





  function templateEntry(firstName, lastName, guestId) {
    console.log('templating', guestId);
    var templateHtml = $('#guestlist-template').html();
    var templateFunc = _.template(templateHtml);
    var html = templateFunc(
      {
        guestId: guestId,
        firstName: firstName,
        lastName: lastName
      }
    );
    var $names = $('#names');
    $names.append(html);
  }

  function signIn() {
    var $firstName = $('#first-name');
    var $lastName = $('#last-name');


    var promise = $.ajax({
      url: '/api/guestbookentry',
      method: 'POST',
      data: {
        firstName: $firstName.val(),
        lastName: $lastName.val()
      }
    });
    promise.done(function(data) {
      templateEntry($firstName.val(), $lastName.val(), data.guestId );
    });
  }

  function loadExistingData() {
    var promise = $.ajax({
      url: '/api/guestbookentry'
    });
    promise.done(function(data) {
      console.log(data);

      data.forEach(function(entry) {
        console.log('the entry', entry)
        templateEntry(entry.firstName, entry.lastName, entry.guestId);
      });
    });
  }

  function deleteClicked(evt) {
      var $target = $(evt.target);
      var id = $target.data('id');
      console.log('id', id);

      $.ajax({
        url: '/api/guestbookentry/' + id,
        method: 'DELETE'
      });
  }



  function start() {

    loadExistingData();

    var $signInButton = $('#sign-in-button');

    $signInButton.on('click', signIn)

    $('#names').on('click', deleteClicked);
  }

  context.start = start;

})(window.GuestBook);
