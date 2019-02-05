# WordGuessCLI
This CLI application is a simple hangman style game.  

When you begin the game the application will select a random word, display a series of __ as a stand in for unguessed letters, and then prompt you to guess a letter.

Each time you guess a letter the application checks to see if any of the letters match your guess and then it displays the word again, filling in any correctly guessed letters, and prompts you to guess again.

This continues until you have either guessed the word correctly or have missed a total of five guesses.

Upon the completion of the game, either in victory or defeat, the application will ask whether you would like to play again.  

If the user responds yes it randomly chooses a new word and begins the game anew, otherwise it thanks you for playing and ends the application.

# Getting Started
The first thing you must do after cloning down the application is to install the needed modules.  

This application only requires the inquirer module, but it is even easier!

All you must do is enter the command 'npm install' in the same directory and it will fetch the appropriate module for you.

![npmInstall](./Images/npminstall.PNG)

Now to get the game going you just need to enter the command 'node index.js' on the command line and the game will begin.

![startGame](./images/Start_game.PNG)

# Playing the Game
Now that the game has begun the user enters a letter for their guess and hits enter.  The application checks the letter against the randomly selected word and displays if the user was correct or incorrect.

Here the user guessed incorrectly:

![IncorrectGuess](./images/Incorrect_Guess.PNG)

Here the user missed another guess but then they got one right:

![missedandCorrect](./images/missedAndCorrect.PNG)

After each guess the game displays the number of chances to miss the user has remaining.

Here we see the user manages to correctly guess the final letters:

![victory](./images/capitalAndLowercaseVictory.PNG)

Now we see the user decides to play again:

![newGame](./images/NewGame.PNG)

This time the user fails to get the word before they lose all five chances:

![gameLost](./images/GameLost.PNG)

and they decide not to continue the game:

![GameOver](./images/DoNotContinue.PNG)

# Validation and Simplifying Input
As you may have noticed from the images the user is able to enter both capital and lowercase letters with no problem.

This is because the application stores everything as a capital and converts the user input to a capital before checkign anything with it.  This way the user doesn't need to worry about remembering to enter a letter oen way or another.

On top of allowing the user to simply enter a letter how they wish we do need to make sure the user enters only one letter.

This is done by adding a validation option to the inquirer prompt.

If a user tries to enter more than one letter at once:

![multiletters](./images/MultipleLetters.PNG)

It responds by throwing a small error and prompting the player to try again, all without taking away a chance to miss from them.

![validated](./images/Validated.PNG)

Now the same validation option on the prompt checks to see whether the user entered a number, and if they did it throws that same error and asks for the user to enter the correct type of input.


