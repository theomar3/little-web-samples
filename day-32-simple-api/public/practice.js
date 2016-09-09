'use strict';
if (this.AppName === undefined) this.AppName = {};

(function(context) {

  function incrementerClicked() {
    $.ajax({
      url: '/api/counter',
      method: 'POST'
    });
  }

  function showClick() {

    var promise = $.ajax({
      url: '/api/counter'
    });
    promise.done(clicks);

  }

  function clicks(data) {
    console.log(data);
    var templateHtml = $('#counter-template');
    var templateFunc = _.template(templateHtml);
    var $counterDisplay = $('.counter-display');



    var html = templateFunc(
      {
        count: data.theCount
      }
    );
    $counterDisplay.html(html);

  }

  function start() {

    var $incrementer = $('#incrementer');
    $incrementer.on('click', incrementerClicked);

    var $showClick = $('#show-click');
    $showClick.on('click', showClick);
  }

  context.start = start;

})(window.AppName);
