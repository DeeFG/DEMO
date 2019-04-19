/// link a val.  value to a new button
///set the timer for the game
/// how to change pages for each question

var score = 0;
var totalscore = 0;
var winnerPhoto = "";
var losePhoto = "";
var points = 0;
//var totalQuestions = questions.length;
var userSelect = undefined;
var countdown;
var timer;
var index = 0;


var questions = [
    {
        question: "Which of the following is the longest venomous snakes in Africa?",
        choices: ["Black racer", "Red-bellied black snake", "Balck rat snake", "Black mamba"],
        answer: 3
    },
    {
        question: " The song All Black Everything by Lupe Fiaco debut on whic of his albums",
        choices: ["The Blueprint", "Lasers", "Dragas Light", "Black Notes"],
        answer: 1
    },
    {
        question: "What fossil fuel is often referred to as black gold?",
        choices: ["Natural Gas", "Diamond", "Coal", "Oil"],
        answer: 3
    },

    {
        question: "Which one of these words are not associated with blackmail?",
        choices: ["shakedown", "artlessness", "extortion", "fruad"],
        answer: 1
    },

    {
        question: "Which one of these is not a 'black widow'?",
        choices: ["A woman who has killed her husband", "A spider", "A way of bribing someone", "A movie title"],
        answer: 1
    },

    {
        question: "Where is the Black Sea?",
        choices: ["In Southeast Asia, near Thailand", "In Africa", "The La Brea Tar Pits", "Between Europe and Asia"],
        answer: 3
    },

    {
        question: "What is the 'black death'?",
        choices: ["Indie Rock group", "Bubonic Plague", "Ancient pagan religion", "Bug Spray"],
        answer: 1
    },
    {   question: "In the 2018 film Black Panther, Over 25,000 cubic feet of foam was used in the Warrior Falls set to replicate which african waterfall? ",
        choices: ["Victoria Falls", "Sipi Falls", "Oribi Gorge", "Kalambo Falls"],
        answer: 2
    }


];

$(document).on("click", "#start", function () {
    $("#start").hide();
    console.log("START")
    
});

$("button").click(function () {
    var val = +$(this).val();
    console.log(val);
if (questions[currentQues].answer === val){
console.log("correct")
}

});

var currentQues = 0;
$(document).ready(function () {
    console.log("ready!");

    // SHOW------ Questions
    console.log(questions[currentQues].question);
    $("#box1").text(questions[currentQues].question); // rotate questions

    // SHOW--CHOICES 
    for (var j = 0; j < questions[currentQues].choices.length; j++) {
        console.log(questions[currentQues].choices[j]);
        $("#option" + j).val(j); // rotate questions
        $("#option" + j).text(questions[currentQues].choices[j]);
    }
});

//--------START GAME-----


// ----------SET SCOREING RULES
function checkCorrectAnswer() {
    var numIndex = questions[i].answer;

    // if answer is correct
    if (userSelects === numIndex) {
        // add to the number of correct answers
        points++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
    }
    // if answer is wrong or blank
    else {
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
    }
}


//----------RESET
// functino reset(){
//     console.log("reset")
//     new question
//     new answer
// }


// ------- funtions -------
///--------ADD TIMER FUNCTION
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    // var fiveMinutes = 60 * 5,
    //     display = document.querySelector('#timer');
    // startTimer(fiveMinutes, display);

    $(document).on("click", "#start", function () {
        $("#start").hide();
        console.log("START")
        
    });


};
// cancel timer-------------