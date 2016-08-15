'use strict';
if (this.Templating === undefined) this.Templating = {};

(function(context) {


  function start() {

    function stockTemplate() {
      var stocks = [
        {
          name: 'Yahoo! Inc.',
          symbol: 'YHOO',
          price: 42.94
        },
        {
          name: 'Apple Inc.',
          symbol: 'AAPL',
          price: 108.18
        },
        {
          name: 'Microsoft Corporation',
          symbol: 'MSFT',
          price: 57.94
        },
        {
          name: 'Sony Corp',
          symbol: 'SNE',
          price: 32.82
        }
      ];


        var $templateHtml = $('#stock-template').html();
        var htmlFactory = _.template($templateHtml);
        var $stockList = $('#stock-list');

        for (var i = 0; i < stocks.length; i++) {
          var html = htmlFactory(
            {
              name: stocks[i].name,
              symbol: stocks[i].symbol,
              price: stocks[i].price
            });
          $stockList.append(html);
        }
    }


      stockTemplate();

      //TODO: Create a template for this and show the data on the page.

  }

  context.start = start;

})(window.Templating);
