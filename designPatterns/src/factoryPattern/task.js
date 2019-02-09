// task class
; 'use strict';

let repo = require('./taskRepository.js');

let Task = function ( object ) {
    this.title = object.title;
    this.completed = false;
    this.user = null;
}

Task.prototype.completed = function () {
    console.log(`completing task ${this.title}`);
    this.completed = true;
}

Task.prototype.save = function () {
    console.log(`saving task ${this.title}`);
    // repo save
    repo.save(this);
}

module.exports = Task;