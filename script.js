// Pseudo coding
// Make a start screen with a start button
// Event listener to start program
    //When start button pressed
        // show questions and answers 
        // show question and answers
            // check to see if correct or not
            // if correct
                // add a point to score counter
                //show next question
            // if false
                // subtract 5s from current time left
                //show next question
        // start a timer
            // when timer ends, end game
            // show score
            // give option to add intials
            // add highscore to a table showing score and intials
            // make highscore save to local storage
            // give option to play again
            // make clear button, erase local storage

var startbtn = document.querySelector("#startbutton");
var startScreen = document.querySelector(".startscreen");
var question1 = document.querySelector("#question1");
var question2 = document.querySelector("#question2");
var question3 = document.querySelector("#question3");
var allDone = document.querySelector(".alldone");
var highScore = document.querySelector(".highscore");
var secondsLeft = 60;

question1.hidden = true;
question2.hidden = true;
question3.hidden = true;
allDone.hidden = true;
highScore.hidden = true;

startbtn.addEventListener("click", startGame());

function startGame() {
    question1.hidden = false;
    startScreen.hidden = true;

}