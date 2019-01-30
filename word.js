var Letter = require('./letter');

var Word = function(word) {
    this.word = word, 
    this.letters = [],
    this.makeLetters = function() {
        for (let i = 0; i < this.word.length; i++) {
            this.letters.push(new Letter(this.word[i]));
        };
    },
    this.toString = function() {
        var string = "";
        for (let j = 0; j < this.letters.length; j++) {
            string += " "+this.letters[j].show();
        };
        console.log(string.trim());
    }
}

module.exports = Word;