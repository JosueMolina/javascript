// Revealing module pattern
; 'use stric';

function Calculator (calculatorName) {
    // private scope
    let name = calculatorName;

    let add = function ( x, y ) {
        console.log(`${name} : ${x} + ${y} = ${x +y}`);
    }

    // exposed public members
    return {
        add : add
    }

}

let calc = new Calculator('revealing module pattern');
calc.add(4, 18);