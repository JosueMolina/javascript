; 'use strict';

const wordNikApiUrl = 'https://api.wordnik.com/v4/words.json/randomWord?&minLength=4&maxLength=10&api_key=48dd829661f515d5abc0d03197a00582e888cc7da2484d5c7';
const giphyApiUrl = 'https://api.giphy.com/v1/gifs/search?rating=PG&api_key=s4Ew8cOq3PGzy6mNlhv2yrHmOrnLrOOb&q=';

function setUp() {
    wordGif()
    .then( ( result ) => {
        console.log(`word : ${ result.word }`);
        console.log(`image Url : ${ result.imageUrl }`);
    })
    .catch( (err ) => console.log( err.message ) );
}


async function wordGif () {
    let wordNikResponse = await fetch( wordNikApiUrl );
    let wordObject = await wordNikResponse.json();

    if ( wordObject.word === undefined )
        throw new Error ('No word found');

    let giphyResponse =  await fetch( giphyApiUrl + wordObject.word );
    let giphyImg = await giphyResponse.json();

    if ( giphyImg === undefined || giphyImg['data'] === undefined || giphyImg['data'].length <= 0 ) {
        throw new Error ( 'No image found' );
    }

    let imageUrl = giphyImg.data[0].images['fixed_height_small'].url;

    return {
        word : wordObject.word,
        imageUrl : imageUrl
    }
}

setUp();