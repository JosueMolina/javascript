; 'use strict';

(function ( window, undefined ) {

    let closure = myNonClosure();
    console.log(closure);

    let closure2 = myNonClosure();
    console.log(closure2);

    // standar function
    function myNonClosure () {
        let date = new Date();
        return date.getMilliseconds();
    }
})( window );