'use strict';
if (this.ObjectPractice === undefined) this.ObjectPractice = {};

(function(context) {

  function generateRandomHPBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function generateRandomName() {
    var names = ['Spider Pig', 'Duff Man', 'Repair Man Man Man', 'The Coon'];
    var nameIndex = Math.floor(Math.random() * names.length);
    var randomName = names[nameIndex];

    return randomName;
  }

  function generateRandomCharacter() {

    var characterName = generateRandomName();

    var hp = generateRandomHPBetween(5, 10);

    return   {name: characterName, hp: hp};
  }

  function start() {

    var $templateHtml = $('#dude-template').html();
    var htmlFactory = _.template($templateHtml);
    var $characterList = $('.character-list');

    for(var i = 0; i < 10; i++) {
      var html = htmlFactory(generateRandomCharacter());
      $characterList.append(html);
    }





  }

  context.start = start;

})(window.ObjectPractice);
