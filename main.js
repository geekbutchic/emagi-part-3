const emojis = require('./emojis.js');
const encodeWord = require('./encode-word.js');
const translateWord = require('./translate-word.js');
const getCategory = require('./get-category.js');
const madlibWord = require('./madlib-word.js');
const search = require('./search.js')
const randomElement = require('./random-element.js')



// process.argv is doing the split - making an array of the words
const command = process.argv[2];
// --> 'what am i doing'
const argument = process.argv.slice[3];
// --> argument = or input words
const inputWords = process.argv.slice(3);
// ['path/node', 'path/main.js', 'encode', 'i', 'cry', 'in', 'the', 'rain']
// process.argv.slice(3) -> is slicing from index[3] to the end.
// ['i', 'cry', 'in', 'the', 'rain']
// inputWords = new array after .slice


// `if/else if` version.
if (command === 'encode') {
    const encodedWord = inputWords.map(encodeWord);
    console.log(encodedWord.join(' '));
} else if (command === 'translate') {
    const translatedWords = inputWords.map(translateWord)
    console.log(translatedWords.join(' '));
} else if ( command === 'madlibs') {
    const madlibbedWords = inputWords.map(madlibWord);
    console.log(madlibbedWords.join(' '));
} else if (command === 'search') {
    const matches = search(argument);
    if (matches.length === 0) {
        console.log ('There was not match.');
    } else {
        for (const match of matches) {
            console.log(match.symbol);
        }
    }
} else if( command === 'random' && argument === 'undefined') {
    // if you type in node main.js random = they will get a random emoji 
    const emoji = randomElement(emojis);
    console.log(emoji.symbol);
} else if (command === 'random') {
    // if they type in node main.js random face = they will get an emoji of a face
    // filter category
    const categoryEmojis = getCategory(argument);
    const emoji = randomElement(categoryEmojis);
    console.log(emoji.symbol);
} else {
    console.log('Your choices for what to write after "node main.js" (and a space!) are:');
    console.log('* "encode"');
    console.log('* "translate"');
    console.log('* "madlibs"');
    console.log('* "search"');
    console.log('* "search"');
    console.log('* "random" (with optional category word)');
}


// or, as a switch


switch (command) {
    case 'encode':
        const encodedWords = inputWords.map(encodeWord);
        console.log(encodedWords.join(' '));
        break;

    case 'translate':
        const translatedWords = inputWords.map(translateWord);
        console.log(translatedWords.join(' '));
        break;

    case 'madlibs':
        const madlibbedWords = inputWords.map(madlibWord);
        console.log(madlibbedWords.join(' '));
        break;

    case 'random':
        if (argument === undefined) {
            console.log(randomElement(emojis.emoji));
        } else {
            console.log(randomElement(emojis[argument]));
        }
        break;

    case 'search':
        const matches = search(argument);
        if (matches.length === 0) {
            console.log('There was no match.');
        } else {
            for (const match of matches) {
                console.log(match.symbol);
            }
        }
        break;

    default:
        console.log('Your choices for what to write after "node main.js" (and a space!) are:');
        console.log('* "encode"');
        console.log('* "translate"');
        console.log('* "madlibs"');
        console.log('* "search"');
        console.log('* "search"');
        console.log('* "random" (with optional category word)');
}














