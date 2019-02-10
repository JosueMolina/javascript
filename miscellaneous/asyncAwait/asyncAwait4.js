; 'use strict';

function myAsyncFunction ( number ) {

    return new Promise ( function ( resolve, reject ) {

        if (isNaN( number )) {
            reject();
        } else {
            setTimeout ( function () {
                resolve( myResolveFunction ( number) );
            }, 1000 ) // after 1 second
        }
    });
}

function myResolveFunction ( number ) {
    console.log( `result from pow for the number ${number} is : ` , Math.pow( number, 3 ));
}

myAsyncFunction(3);