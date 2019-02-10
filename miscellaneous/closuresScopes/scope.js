; 'use strict';

(function ( window, undefined ) {

    let foo = 'foo here';
    let bar = 'bar here';
    function barFunction() {
        let foo =  'something else here'; //setting local variable
        bar = 'not bar anymore'; // setting global variable
    }

    barFunction();

    let textFoo =  foo;
    let textBar = bar;
    console.log(textFoo, ', from textFoo');
    console.log(textBar, ', from textBar');

})( window );