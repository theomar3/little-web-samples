'use strict';

var passengerArray;

function Car(make, model) {
  this.make = make;
  this.model = model;
  this.passengers = [];
  passengerArray = this.passengers;
}

Car.prototype.honk = function() {
  return 'beep beep';
}

Car.prototype.addPassenger = function(passenger) {
  passengerArray.push(passenger);
}

Car.prototype.description = function() {
  return "This is a " + this.make + " " + this.model;
}

Car.prototype.passengerList = function() {
  if(passengerArray.length === 0) {
    return 'no passengers';
  }
  else if(passengerArray.length === 1) {
    return passengerArray;
  }
  else {
    return passengerArray.split(0,passengerArray.length-1).join(', ') + ', and' + passengerArray.length[passengerArray.length-1];
  }
}

function ChevyCar() {

}

ChevyCar.prototype = new Car();


ChevyCar.prototype.breakDown() {

}



ChevyCar.prototype.honk = function() {
  return 'boop boop';
}
