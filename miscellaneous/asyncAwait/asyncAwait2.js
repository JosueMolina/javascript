; 'use strict';

function setUp () {
    delayEs8( 3000 )
    .then(( response ) => console.log(`hello from delayEs8 after ${response/1000} seconds`))
    .catch(( err ) => console.log(err));
}

async function delayEs8 ( time ) {
    return await delay( time );
}

function delay ( time ) {
    return new Promise (( resolve, reject ) => {

        if (isNaN(time)) {
            reject (new Error ('delay requires a number as time parameter'));
        }

        setTimeout(resolve, time, time); // third parameter is the parater past to the resolve function
    });
}

setUp();
