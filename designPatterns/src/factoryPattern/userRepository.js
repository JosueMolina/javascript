// use repository
; 'use strict';

let repo = function () {

    let get = function ( id ) {
        console.log(`getting user with id ${id} from the database`);
        return {
            name : 'userName',
            role : 'userRole'
        }
    }

    let save = function (user) {
        console.log(`saving user ${user.name} from the database`);
    }

    return {
        get : get,
        save : save
    }
}

module.exports = repo;