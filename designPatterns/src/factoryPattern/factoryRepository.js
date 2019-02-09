// factory repository
; 'usa stric';

let factoryRepository = function () {
    const repos = this;
    const repoList = [
        {name : 'task', source : './taskRepository'},
        {name : 'user', source : './userRepository'}
    ]

    repoList.forEach(function ( repo ) {
        repos[repo.name] = require(repo.source)();
    })
}

module.exports = new factoryRepository;