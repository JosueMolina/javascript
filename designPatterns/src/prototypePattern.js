//PrototypePattern
; 'use stric';

function Calculator ( name ) {
    this.name = name;
}

Calculator.prototype.add = function( x, y ) {
    console.log( `${this.name} : ${x} + ${y} = ${x + y}` );
}

let calc = new Calculator('prorotype pattern calculator');
calc.add(10, 7);