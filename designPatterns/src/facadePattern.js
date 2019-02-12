; 'use strict';

// example 1, method to add cross-browser event listener (does nothing, only for example)
let addMyEvent =  function ( el, ev, fn ) {

    if ( el.addEventListener ) {
        el.addEventListener( ev, fn );
    } else if ( el.attachEvent ) {
        el.attachEvent( "on" + ev, fn );
    } else {
        el["on" + ev] = fn;
    }
}

// example 2 module pattern integarated with the facade patttern

let module = ( function () {

    let _private = {
        i : 5,

        get : function () {
            console.log( 'current value : ' + this.i );
        },

        set : function ( value ) {
            this.i = value;
        },

        run : function () {
            console.log('running');
        },

        jump : function () {
            console.log('jumping');
        }
    };

    return {
        facade : function ( args ) {
            _private.set(args.value);
            _private.get();

            if ( args.run )
                _private.run();
        }
    }

})();

module.facade({ run : true, value : 10 });
