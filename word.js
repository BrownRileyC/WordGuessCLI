var Letter = require('./letter');

var Word = function (word) {
    this.word = word,
    this.letters = [],
    this.makeLetters = function () {
        for (let i = 0; i < this.word.length; i++) {
            this.letters.push(new Letter(this.word[i]));
        };
    },
    this.toString = function () {
        var string = "";
        var completedString = '';
        for (let j = 0; j < this.letters.length; j++) {
            completedString += this.letters[j].show();
            string += " " + this.letters[j].show();
        };
        if (completedString === this.word) {
            console.log("You've won!");
            this.victory = true;
            return string.trim();
        } else {
            return string.trim();
        }
    }
}

module.exports = Word;