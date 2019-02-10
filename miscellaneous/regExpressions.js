; 'use strict';

(function ( window, undefined ) {

    let s = 'hello world from code this is my Home Number 837-234-2234 and this is my mail eusojkevin@gmail.com';

    let foo = `Lorem eusojkevinmolinafuentes@hotmail.com Ipsum is
    eusoj_kevin@gmail.com simply dummy text of the printing and
    typesetting industry. Lorem Ipsum has been the industry's
    standard dummy text ever since the 1500s, when an unknown printer
    took a galley of type and scrambled it to make a type specimen
     book. It has survived not only five centuries, but also the
     leap into electronic typesetting, remaining essentially unchanged.
     It was popularised in the 1960s with the release of Letraset
     sheets containing kevin.molina@yahoo.com Lorem Ipsum passages, and more recently with
     desktop publishing software like Aldus PageMaker including
     versions of Lorem Ipsum.`;

    // \b word boundary
    let regExVariable = /\b\w+\b/g;

    //gets and returns first coincidence and so on as it gets executed
    console.log(regExVariable.exec( foo ), 'using exec (word boundary)');

    // using split to get an array filled by all words
    console.log(foo.split(/\s/g), 'using split');

    // regular expresion for email
    let regExEmail = /[a-zA-Z0-9_.]+@\w+\.\w{3}/g;
    console.log(foo.match( regExEmail ), 'match an email');

    // regular expresion for phone number
    let regExPhoneNumber = /\d{3}[-.]\d{3}[-.]\d{4}/g;
    console.log(s.match( regExPhoneNumber ), 'match phone number');

    // returns true if the regular expression find a match in
    // the string otherwise returs false
    console.log(regExPhoneNumber.test(s), 'using test');

    // using replace to replace found emails
    bar = foo.replace(/[a-zA-Z0-9_.]+@(gmail|hotmail|yahoo)\.\w+/g, 'FOUND IT!!!');
    console.log(bar, 'from using replace');

    // using a function on replace method
    function replacer (match, group1) {
        console.log(group1, 'group from function replacer');
        console.log(match, 'match from function replacer');

        if (match.length > 25)
            return 'too long';

        return match;
    }

    foo.replace(/[a-zA-Z0-9_.]+@(gmail|hotmail|yahoo)\.\w+/g, replacer);

})( window );