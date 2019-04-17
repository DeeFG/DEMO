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


var questions = [
    {
        question: "What is the capital of United Kingdom?",
        choices: ["Manchester", "Birmingham", "London", "Birmingham"],
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


//--------START GAME-----

///--------ADD TIMER FUNCTION
//   $(function () {
//     var timer;
//     $("#timer").html(timer);
//     function come() { alert("here"); }
//     clearInterval(timer);
//     var timer = setInterval(come, 10000000);
// });


// var timer = setInterval(function () {
//     if (!score === 0) {
//         $("timer").text(timer);
//     }
//    // clearTimeout(timer);
// }, 10000);

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

//---------CANCEL TIMER WHEN NEEDED 


// ----------SET SCOREING RULES
//     function checkCorrectAnswer() {
//         console.log("checkAnwer")  }

//----------RESET
// functino reset(){
//     console.log("reset")
//     new question
//     new answer
// }



$(document).ready(function () {
    console.log("ready!");

    $("button").click(function () {
        console.log("hello");

    })

    for (var i = 0; i < questions.length; i++) {

        // SHOW------ Questions
        console.log(questions[i].question);
        $("#box1").text(questions[i].question); // rotate questions


        // SHOW--CHOICES 
        console.log(questions[i].choices);
        button.text(questions[i].cjoices);


        /////// --- MATCH ANWERS
        $("button").val(questions[i].choices);
        console.log(questions[i].answer);


        //-------CHANGE QUESTION AND ANWER
        // function changeQues() { }
        // function changeAnsw() {}


    }


});

