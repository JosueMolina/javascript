; 'use strict';

// a vehicle constructor
function Vehicle( vehicleType ) {
    //some sane values
    this.vehicleType = vehicleType || 'car';
    this.model = 'default';
    this.license = '00000-000';
}

let testInstance = new Vehicle( 'car' );
console.log( testInstance );

// crating a new instance of a vehicle to be decorated
let truck = new Vehicle( 'Truck' );

// new functionality we are decorating vehicle with

truck.setModel = function( modelName ) {
    this.model = modelName;
}

truck.setColor = function ( color ) {
    this.color = color;
}

// test the value setter and value assignments work correctly
truck.setModel('car');
truck.setColor('blue');

console.log( truck );

let secondInstance = new Vehicle( 'car' );
console.log( secondInstance );