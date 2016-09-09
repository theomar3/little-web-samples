'use strict';
if (this.AppName === undefined) this.AppName = {};

(function(context) {

  var $list = $('#list');

  function templateEntry(firstName, lastName, guestId, hasGivenGift){
    var className = '';
    if(hasGivenGift == 'true') {
      className = 'has-given-gift';
    }


    var templateHtml = $('#guestlist-template').html();
    var templateFunc = _.template(templateHtml);
    var html = templateFunc(
      firstName: firstName,
      lastName: lastName,
      guestId: guestId,
      className: className
    );
    $list.append(html);
  }

  function signIn() {
    var $firstNameValue = $('#first-name').val();
    var $lastNameValue = $('#last-name').val();
    var promise = $.ajax({
      url: '/api/guestbookentry',
      method: 'POST',
      data: {
        firstName: $firstNameValue,
        lastName: $lastNameValue,
        hasGivenGift: false;
      }
    });

    promise.done(function(data) {
      templateEntry($firstNameValue, $lastNameValue, data.guestId, false);

    });
  }

  function loadExistingData() {
    var promise = $.ajax({
      url: '/api/guestbookentry',
    });

    promise.done(function(result) {
      templateEntry(result.firstName, result.lastName, result.guestId, result.hasGivenGift)
    });
  }

  function deleteClicked(evt) {
    var $target = $(evt.target);
    var id = $target.parent().data('id');

    var promise = $.ajax({
      url: '/api/guestbookentry/' + id,
      method: 'DELETE'
    });

    $target.parent().remove();
  }

  function gaveGift(evt) {
    var $target = $(evt.target);
    var id = $target.parent().data('id');

    $.ajax({
      url: '/api/guestbookentry/' + id,
      method: 'PUT',
    });

    $target.parent().toggleClass('has-given-gift');

  }


  function start() {

    var $signInButton = $('#sign-in-button');
    $signInButton.on('click', signIn);

    //when page is refreshed
    loadExistingData();

    $list.on('click','delete-button', deleteClicked);

    $list.on('click','gave-gift-button', gaveGift);

  }

  context.start = start;

})(window.AppName);
