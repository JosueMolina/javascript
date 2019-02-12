; 'use strict';

export function ObserverList () {
    this.observerList = [];
}

ObserverList.prototype.add = function ( object ) {
    return this.observerList.push( object );
}

ObserverList.prototype.get = function ( index ) {
    if (index > -1 && index < this.observerList.length)
        return this.observerList[index];
}

ObserverList.prototype.count = function () {
    return this.observerList.length;
}

ObserverList.prototype.indexOf = function ( object, startIndex ) {
    let i = startIndex;

    while ( i < this.observerList.length ){
        if ( this.observerList[i] === object )
            return i;
        i++;
    }

    return -1;
}

ObserverList.prototype.removeAt =  function ( index ) {
    this.observerList.splice(index, 1);
}