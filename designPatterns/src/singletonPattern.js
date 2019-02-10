; 'use strict';

let mySingleton = ( function () {

    let instance;

    function init() {
        //singleton

        let privateVariable = 'I am a private variable';
        let privateRandomNumber = Math.random();

        let privateMethod = function () {
            console.log('I am a private method');
        }


        return {
            publicMethod : function () {
                console.log('I am a public method');
            },

            publicProperty : 'I am a public property',

            getRandomNumber : function () {
                return privateRandomNumber;
            }
        }
    }

    return {
        //get the singleton instance if one exits
        //or create one if it does'
        getInstance : function () {
            if ( !instance ) {
                instance = init();
            }

            return instance;
        }
    }

})();


let myBadSingleton = (function () {

    let instance;

    function init () {
        let privateRandomNumber =  Math.random();

        return {
            getRandomNumber : function () {
                return privateRandomNumber;
            }
        }
    }

    return {
        // always create a new singleton instance
        getInstance : function () {
            instance = init();
            return instance;
        }
    }

})();

// usage
let mySingletonA = mySingleton.getInstance();
let mySingletonB = mySingleton.getInstance();
let result =  mySingletonA.getRandomNumber() === mySingletonB.getRandomNumber();
console.log(result , 'result from singleton'); // should be true

let badSingleA = myBadSingleton.getInstance();
let badSingleB = myBadSingleton.getInstance();
let badResult = badSingleA.getRandomNumber() !== badSingleB.getRandomNumber();
console.log(badResult, 'from bad result, not singleton'); //  should be true
