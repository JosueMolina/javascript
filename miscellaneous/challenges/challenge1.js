// find the max number of consecutives chars by joining a given array
// finding all permutations to get the max numbers possible repeated by joining the given array
// note : factorialize used only for practice not necessary to complete the exercice
; 'use strict';

( function ( window ) {

    let counterOnPrint = 0;
    const array = ['dd', 'bb', 'cc', 'dd'];
    let maxRepeated = 0;

    function factorialize( n ) {
        if ( n < 0 ) {
            return -1
        } else if( n == 0 ) {
            return 1;
        } else {
            return ( n * ( factorialize( n -1 ) ) );
        }
    }

    function findMostRepeated( joinedArray ) {

        let previous = '';
        let counter = 1;
        let maxCounter = 1;

        joinedArray.split('').forEach(( char ) => {

            if ( char === previous ) {
                counter++;
            }
            else {
                if ( counter > maxCounter )
                    maxCounter = counter;

                counter = 1;
            }

            previous = char;

        });

        if ( maxCounter > maxRepeated )
            maxRepeated = maxCounter;

        return maxCounter;
    }

    function printArray( array ) {
        console.log( `${++counterOnPrint} - `, array.join(','), findMostRepeated( array.join('') ) );
        findMostRepeated( array.join('') );
    }

    function heapPermutation( array, size, n ) {

        if ( size === 1 ) {
            printArray ( array );
            return;
        }

        for ( let i = 0; i < size; i++ ) {
            heapPermutation(array, size - 1, n);

            if ( size % 2 === 1 ) {
                let temp = array[ 0 ];
                array[ 0 ] = array[ size -1 ];
                array[ size -1 ] = temp;
            } else {
                let temp = array[ i ];
                array[ i ] = array[ size - 1 ];
                array[ size - 1 ] = temp;
            }
        }
    }

    heapPermutation( array, array.length, array.length );
    console.log('Final Result : ', maxRepeated);

})( window, undefined );