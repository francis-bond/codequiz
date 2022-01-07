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
var questions = document.querySelectorAll(".questions")
var allDone = document.querySelector(".alldone");
var highScore = document.querySelector(".highscore")
var table = document.getElementById("myTable");
var secondsLeft = 30;
var timeEl = document.querySelector(".time");
var scoreDisplay = document.getElementById("score")
var score = 0;
var intials = document.getElementById("initials");
var submitBtn = document.getElementById("submit")
var clearBtn = document.getElementById("clearbtn")

question1.hidden = true;
question2.hidden = true;
question3.hidden = true;
allDone.hidden = true;
highScore.hidden = true;

console.log(scoreDisplay)


function startGame() {
    question1.hidden = false;
    startScreen.hidden = true;
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timeEl.textContent = "Time:" + secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            stopGame();
        }
    }, 1000)
};

var answers1 = document.querySelectorAll(".answers1");
console.log(answers1);
answers1.child.addEventListener("click", function(){
    if(answers1.id === true){
        score++
    } else{
        secondsLeft = secondsLeft - 5;
    }
    question1.hidden = true;
    question2.hidden = false;
});

var answers2 = document.querySelectorAll(".answers2");

answers2.child.addEventListener("click", function(){
    if(answers2.id === true){
        score++
    }else{
        secondsLeft = secondsLeft - 5;
    }
    question2.hidden = true;
    question3.hidden = false;
});

var answers3 = document.querySelectorAll(".answers1");

answers3.child.addEventListener("click", function(){
    if(answers3.id === true){
        score++
    }else{
        secondsLeft = secondsLeft - 5;
    }
    question3.hidden = true;
    stopGame();
});

function stopGame(){
    question1.hidden = true;
    question2.hidden = true;
    question3.hidden = true;
    allDone.hidden = false;
    scoreDisplay.textContent += score;
};

function addInitials(){
    var row = table.insert[0]
    var cell1 = row.insert[0]
    var cell2 = row.insert[1]
    cell1.innerHTML = intials;
    cell2.innerHTML = score;

    allDone.hidden = true;
    highScore.hidden = false;

    intials.textContent = ""
    score = 0;
}

// function clearScores(){
//     // for loop to .remove any rows except the first

// }

