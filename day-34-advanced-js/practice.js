function Transformer(name) {

}

Transformer.prototype.transform = function() {
  this.isTransformed = false;
}

Transformer.prototype.addTransformer = function(transformer) {
  this.subtransformers.push(transformer);
}

function Autobots(name) {
  this.name = name;
  this.isTransformed = false;
  this.subtransformers = [];
}

Autobots.prototype = new Transformer();

Autobots.prototype.battleCry = function() {
  return 'Autobots, roll out!'
}


function Decepticons(name) {
  this.name = name;
  this.isTransformed = false;
  this.subtransformers = [];

}

Decepticons.prototype = new Transformer();

Decepticons.prototype.battleCry = function() {
  return 'Decepticons, transform!'
}
