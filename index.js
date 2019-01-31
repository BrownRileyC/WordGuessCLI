var Word = require('./word');
var Inquirer = require('inquirer');

var wordArray = ['HELLO', 'GOODBYE', 'FINAL', 'WHEAT', 'COFFEE', 'DESERT', 'DESSERT', 'DINNER', 'COOKING', 'COMPUTER', 'FOREVER', 'CRACKER', 'SOMETHING', 'GAMEPLAY', 'CLICKER', 'NOBODY'];

var guesses = 5;
var selectedWord = wordArray[Math.floor(Math.random() * wordArray.length)];
var newWord = new Word(selectedWord);

var startGame = function () {
    selectedWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    guesses = 5;

    newWord = new Word(selectedWord);

    console.log('Your word has been Selected\r\nThree missed guesses and you lose\r\nGood luck!\r\n');

    newWord.makeLetters();

    var firstDisplay = newWord.toString();
    console.log(firstDisplay + '\r\n');

    playGame();
}

var playGame = function () {
    if (guesses > 0) {
        var correct = false;
        Inquirer.prompt({
            name: 'userInput',
            message: 'Guess a letter\r\nYou have ' + guesses + ' chances to miss remaining'
        }).then(function (response) {
            for (let k = 0; k < newWord.letters.length; k++) {
                if (response.userInput.toUpperCase() === newWord.letters[k].str) {
                    correct = true;
                }
                newWord.letters[k].guess(response.userInput.toUpperCase());
            }
            console.log(newWord.toString() + '\r\n')
            if (!correct) {
                guesses--
            }
            if (newWord.victory) {
                Inquirer.prompt({
                    name: 'answer',
                    message: 'Would you like to play again?',
                    type: 'confirm'
                }).then(function (response) {
                    if (response.answer) {
                        startGame();
                    } else {
                        console.log('Thanks for playing');
                    }
                });
            } else {
                playGame();
            }
        });
    } else {
        console.log('You missed to many guesses.\r\nYou have lost this time');
        Inquirer.prompt({
            name: 'answer',
            message: 'Would you like to play again?',
            type: 'confirm'
        }).then(function (response) {
            if (response.answer) {
                startGame();
            } else {
                console.log('Thanks for playing');
            }
        });
    }
};

startGame();
