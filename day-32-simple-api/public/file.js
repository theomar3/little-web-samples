if (window.CounterApp === undefined) window.CounterApp = {};

(function (CounterApp) {

  function incrementerClicked() {
    var promise = $.ajax({
      url: '/api/counter',
      method: 'POST'
    });
  }

  function showCount() {

    var promise = $.ajax({
      url: '/api/counter'
    });
    promise.done(countDisplayed);
  }

  function countDisplayed(data) {
    console.log(data);

    var $counterDisplay = $('#counter-display');

    var templateHtml = $('#counter-template').html();
    var templateFunc = _.template(templateHtml);
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

    var $showCount = $('#show-count');
    $showCount.on('click', showCount);

  }

  CounterApp.start = start;

})(this.CounterApp);
