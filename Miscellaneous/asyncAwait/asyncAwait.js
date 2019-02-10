; 'use strict';

(function ( window, undefined ) {

    const wordNikApiUrl = 'https://api.wordnik.com/v4/words.json/randomWord?&minLength=4&maxLength=10&api_key=48dd829661f515d5abc0d03197a00582e888cc7da2484d5c7';
    const giphyApiUrl = 'https://api.giphy.com/v1/gifs/search?rating=PG&api_key=s4Ew8cOq3PGzy6mNlhv2yrHmOrnLrOOb&q=';

    fetch(wordNikApiUrl)
    .then(response => response.json())
    .then(jsonResponse => fetch(giphyApiUrl + jsonResponse.word))
    .then (response => response.json())
    .then(jsonResponse => console.log(jsonResponse.data[0].images['fixed_height_small'].url))
    .catch(err => console.log(err.message));

})( window );