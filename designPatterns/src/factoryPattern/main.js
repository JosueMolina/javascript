// execute this file using node (node main.js).
; 'use stric';

let Task = require('./task');
let User = require('./user');

//this is the facade/factory pattern, the way that
//we exposed the repositories from a single file
let factRepository = require('./factoryRepository');

let task1 = new Task(factRepository.task.get(1));
let user1 = new User(factRepository.user.get(1));

console.log(task1.title);
console.log(`user name : ${user1.name}, user role : ${user1.role}`);