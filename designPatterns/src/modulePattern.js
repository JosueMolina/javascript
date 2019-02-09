//Module Pattern
; 'use strinc'

function Calculator ( calculatorName ) {

    //private scope
    let name = calculatorName;

    return {
        add : function ( x , y ) {
            console.log( `${name} : ${x} + ${y} = ${x + y}` );
        }
    }
}

let calc = new Calculator( 'module pattern calculator' );
calc.add( 9, 10 );