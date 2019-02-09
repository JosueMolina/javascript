// user class
; 'use strict';

let repo = require('./userRepository.js');

let User = function ( object ) {
    this.name = object.name;
    this.role = object.role;
    this.active = false;
}

User.prototype.activate = function () {
    console.log(`activating user ${this.name}`);
    this.active = true;
}

User.prototype.save = function () {
   console.log(`saving user ${this.name}`);
   // repo save
   repo.save(this);
}

module.exports = User;