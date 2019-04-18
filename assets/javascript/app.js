/// link a val.  value to a new button
///set the timer for the game
/// how to change pages for each question




var score = 0;
var totalscore = 0;
var winnerPhoto = "";
var losePhoto = "";
var points = 0;
//var totalQuestions = questions.length;
var button = $("<button>");
var userSelect = undefined;


var questions = [
    {
        question: "What is the capital of United Kingdom?",
        choices: ["Manchester", "Birmingham", "London", "Glasglow"],
        answer: 2
    },
    {
        question: "What is the capital of United States?",
        choices: ["California", "New York", "Miami", "Florida"],
        answer: 1
    },

    {
        question: "What is color is the sun",
        choices: ["red", "yellow", "blue", "violet"],
        answer: 2
    }
];

$("button").click(function () {
        var text = $( this ).text();
            $( "input" ).val( text );
        console.log("hello");
    });


$(document).ready(function () {
    console.log("ready!");



    function newBnt() {
        var newBtn = $("<button>");
        $(newBtn).text("clck me");
        newBtn.appendTo(button);

    }

    for (var i = 0; i < questions.length; i++) {
        // SHOW------ Questions
        console.log(questions[i].question);
        $("#box1").text(questions[i].question); // rotate questions

        // SHOW--CHOICES 
        for (var j = 0; j < questions[i].choices[j].length; j++) {
            console.log(questions[i].choices[j]);
            $("#option").val(questions[i].choices[j]); // rotate questions
           $("button").text(questions[i].choices[j]);
           //newbtn.text(questions[i].choices[j]);
          // ("#option1").append(newbtn);



            for (var k = 0; k < questions[i].answer[k]; k++) {
                /////// --- MATCH ANWERS
                console.log(questions[i].answer[k]);
            }
            //-------CHANGE QUESTION AND ANWER
            // function changeQues() { }
            // function changeAnsw() {}

        }

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
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#timer');
    startTimer(fiveMinutes, display);
};
// cancel timer-------------