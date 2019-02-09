// task repository
; 'use stric';

let repo = function () {

    let get = function ( id ) {
        console.log(`getting task with id ${id} from the database`);
        return {
            title : `Task ${id}`
        }
    }

    let save = function ( task ) {
        console.log(`saving task ${task.title} from the database`);
    }

    return {
        get : get,
        save : save
    }
}

module.exports = repo;

