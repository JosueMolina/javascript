// Revealing prototype pattern
; 'use strict'

function Calculator ( name ) {
    this.name = name;
}

Calculator.prototype = (function () {
    // private members
    let add = function ( x, y ) {
        console.log(`${this.name} : ${x} + ${y} = ${x + y}`);
    }

    // public/exposed members
    return {
        add : add
    }
})();

let calc = new Calculator('revealing prototype pattern calculator');
calc.add(6, 10);