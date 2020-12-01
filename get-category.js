const emojis = require ('./emojis.js');

// filter function
const getCategory = function(word) {
    // does that emoji include the word you gave me
    return emojis.filter(function(emoji){
        return emoji.categories.includes(word);
    });
}
// going through and saying if (face) is the word
// will get back an array with the category:face
// only if it returns true 
// categories === 'face'
// push into new array

module.exports = getCategory;



