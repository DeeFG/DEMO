var score = 0;
var totalscore = 0;
var winnerPhoto = "";
var losePhoto = "";
var plus = 0;
var answers = [];
var minus = 0;
//var choices = [];
var answer = undefined;


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
        choices: ["red", "yellow", "blue","violet"],
        answer: 2
    }
];

$(document).ready(function () {
    console.log("ready!");

    $("button").click(function () {
        console.log("hello");
    })

   
    for (var i = 0; i < questions.length; i++) {
        console.log(questions[i].question);
        $("#box1").text(questions[i].question);}
    
            for (var j = 0; j < questions.length; j++) {
                console.log(questions[j].choices);
                $("button").text(questions[j].choices);
        }

        // for (var k = 0; k < question.length; k++) {
        //    console.log(question); }
    //         //$("button").text(questions[k].choices[k].length);
        //}
       

    //     

    //     }
    // }

    // var timer = setInterval(function () {
    //     if (questions === questions.length) {
    //         clearTimeout(timer);
    //     }
    // }, 1000);

});


        // if/ else statment
        // if == true/macth --> DO SOEMTHING


    //     function score() {
    //         if(checkCorrectAnswer === true)
    //         $("").attr("#winnerPhoto")

    //         console.log("score")
    //     }

    //     function checkCorrectAnswer() {

    //         console.log("checkAnwer")
    //     }

        // functino reset(){
        //     console.log("reset")
        //     new question
        //     new answer
        // }

        // function changeQues() {

    //     }

    //     function changeAnsw() {

    //     }





