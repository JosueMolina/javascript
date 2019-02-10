; 'use strict';

(function ( window, undefined ) {

    let c = new MyClosure();

    //should always log the same value as line 12
    console.log(c.foo());

    window.setInterval(function () {
        // should always log the same value as line 8
        console.log(c.foo());
    }, 2147);

    function MyClosure () {
        let date = new Date ();

        let myNestedFunction = function () {
            return date.getMilliseconds();
        }

        return {
            foo : myNestedFunction
        }
    }
})( window );