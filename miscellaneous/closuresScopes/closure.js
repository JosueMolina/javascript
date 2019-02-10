; 'use strict';

(function ( window, undefined ) {
    
    function MyClosure() {
        let date = new Date();
        
        let customFunction = function () {
            return date.getMilliseconds();
        }

        return customFunction;
    }

    let closure = MyClosure();

    // should  always log the same value as line 22
    console.log(closure());

    window.setInterval(function () {
        // should always log the same value as line 18
        console.log(closure()); 
    }, 2182);

})( window );

