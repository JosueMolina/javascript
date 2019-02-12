; 'use strict';

import { Observer } from './observer.js';
import { Subject } from  './subject.js';

// we should have three html elements like this :

{/* <button id="addNewObserver">Add New Observer checkbox</button>
<input id="mainCheckbox" type="checkbox"/>
<div id="observersContainer"></div> */}

// extend an object with an extension

function extend ( object, extension ) {
    for ( let key in extension ) {
        object[key] = extension[key];
    }
}

// references to DOM elements

let controlCheckBox = document.getElementById('mainCheckbox');
let addBtn = document.getElementById('addNewObserver');
let container = document.getElementById('observerContainer');

// concrete subject

// extend the controller checkbox with the subject  class
extend( controlCheckBox, new Subject() );

// clicking the checbox will trigger notifications to its observers

controlCheckBox.onclick = function () {
    controlCheckBox.notify( controlCheckBox.checked );
}

addBtn.onclick = addNewObserver;

function addNewObserver () {

    // create a new checkbox to be added
    let check = document.createElement('input');
    check.type = 'checkbox';

    // extend the checkbox with the observer class
    extend( check, new Observer() );

    // override with custom update behaviour
    check.update = function ( value ) {
        this.checked = value;
    }

    // add the new observer to our list of observers
    // for our main object
    controlCheckBox.addObserver( check );

    // append the item to the containter
    container.appendChild(check);

}