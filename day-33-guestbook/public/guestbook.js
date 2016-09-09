'use strict';
if (this.GuestBook === undefined) this.GuestBook = {};

(function(context) {

  function templateEntry(firstName, lastName, guestId, hasGivenGift) {
    console.log('templating', guestId);

    var className = '';
    if (hasGivenGift == 'true') {
      className = 'has-given-gift';
    }
    var templateHtml = $('#guestlist-template').html();
    var templateFunc = _.template(templateHtml);
    var html = templateFunc(
      {
        guestId: guestId,
        firstName: firstName,
        lastName: lastName,
        className: className
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
        lastName: $lastName.val(),
        hasGivenGift: false
      }
    });
    promise.done(function(data) {
      templateEntry($firstName.val(), $lastName.val(), data.guestId, false );
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
        templateEntry(entry.firstName, entry.lastName, entry.guestId, entry.hasGivenGift);
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

      //get the parent of the delete button and remove it.
      $target.parent().remove();
  }

  function giftClicked(evt) {
    var $target = $(evt.target);
    var id = $target.data('id');

    $.ajax({
      url: '/api/guestbookentry/' + id,
      method: 'PUT'

    });

    $target.parent().toggleClass('has-given-gift');
  }



  function start() {

    loadExistingData();

    var $signInButton = $('#sign-in-button');
    $signInButton.on('click', signIn)

    $('#names').on('click','.delete-button', deleteClicked);
    $('#names').on('click','.gave-gift-button', giftClicked);

  }

  context.start = start;

})(window.GuestBook);
