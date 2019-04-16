

var score = 0;
var totalscore = 0;
var winnerPhoto = "";
var losePhoto = "";
var plus = 0;
var answers = [];
var minus = 0;
var choices = [];
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
        choices: ["red", "yellow", "blue"],
        answer: 2
    }
];



$("button").click(function () {
    
console.log(" ");

})

for (var i = 0; i < questions.length; i++) {
    console.log(questions);

}
for(var i =0; i < choices.length; i++){
    console.log("choices");

}

        // when click on the anwer

        //check to see if anwer is a match to the question
        //anwer === question loop??? 
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

// $("btn.btn-dark:hover").click(function() {
//     $( this ).slideUp();
//   });

//   $( " ).hover(function() {
//     $( this ).fadeOut( 100 );
//     $( this ).fadeIn( 500 );
//   });
