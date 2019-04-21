
var userSelect = undefined;
var countdown;
var timer;
var index = 0;

var currentQues = 0;
var questions = [

    {
        question: " The song All Black Everything by Lupe Fiasco debut on which of his albums",
        choices: ["The Blueprint", "Lasers", "Dragas Light", "Black Notes"],
        answer: 1
    },
    {
        question: "Which of the following is the longest venomous snakes in Africa?",
        choices: ["Black Racer", "Red-bellied Black Snake", "Balck Rat Snake", "Black Mamba"],
        answer: 3
    },
    {
        question: "What fossil fuel is often referred to as black gold?",
        choices: ["Natural Gas", "Diamonds", "Coal", "Oil"],
        answer: 3
    },
    {
        question: "Which one of these words are not associated with blackmail?",
        choices: ["Shakedown", "Artlessness", "Extortion", "Fruad"],
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
    {
        question: "In the 2018 film Black Panther, Over 25,000 cubic feet of foam was used in the Warrior Falls set to replicate which african waterfall? ",
        choices: ["Victoria Falls", "Sipi Falls", "Oribi Gorge", "Kalambo Falls"],
        answer: 2
    }


];

var choices = ["Lasers", "Black Mamba", "Oil", "Oribi Gorge", "Bubonic Plague", "Spider","Between Europe and Asia","Sikorsky Aircraft","It is a Visa Card","#000000"]

var choiceQ1 = $('input[name="choiceQ1"]:checked').val();
var choiceQ2 = $('input[name="choiceQ2"]:checked').val();
var choiceQ3 = $('input[name="choiceQ3"]:checked').val();
var choiceQ4 = $('input[name="choiceQ4"]:checked').val();
var choiceQ5 = $('input[name="choiceQ5"]:checked').val();
var choiceQ6 = $('input[name="choiceQ6"]:checked').val();
var choiceQ7 = $('input[name="choiceQ7"]:checked').val();
var choiceQ8 = $('input[name="choiceQ8"]:checked').val();
var choiceQ9 = $('input[name="choiceQ9"]:checked').val();
var choiceQ10 = $('input[name="choiceQ10"]:checked').val();


var points = 0;

function startTimer(duration) {
    var timer = duration, minutes, seconds;
    var timerID = setInterval(function () {
        if (--timer < 0) {
            clearInterval(timerID);
            return;
        }

        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = "TIME: " + minutes + ":" + seconds;
    }, 1000);
}




window.onload = function () {
    $("#start").show();
    $("#showhide").hide();

    $(document).on("click", "#start", function () {
        $("#start").hide();
        $("#showhide").show();

        var fifteensec = 180;
        display = document.querySelector('#timer');
        startTimer(fifteensec);
    });
};

$(document).ready(function () {

    $(document).ready(function () {
        $('#btnGetValue').click(function () {
            var choiceQ1 = $('input[name="choiceQ1"]:checked').val();
            console.log(choiceQ1)

            var choiceQ2 = $('input[name="choiceQ2"]:checked').val();
            console.log(choiceQ2)

            var choiceQ3 = $('input[name="choiceQ3"]:checked').val();
            console.log(choiceQ3)

            var choiceQ4 = $('input[name="choiceQ4"]:checked').val();
            console.log(choiceQ4)

            var choiceQ5 = $('input[name="choiceQ5"]:checked').val();
            console.log(choiceQ5)

            var choiceQ6 = $('input[name="choiceQ6"]:checked').val();
            console.log(choiceQ6)

            var choiceQ7 = $('input[name="choiceQ7"]:checked').val();
            console.log(choiceQ7)
            var choiceQ8 = $('input[name="choiceQ8"]:checked').val();
            console.log(choiceQ8)

            var choiceQ9 = $('input[name="choiceQ9"]:checked').val();
            console.log(choiceQ9)

            var choiceQ10 = $('input[name="choiceQ10"]:checked').val();
            console.log(choiceQ10);

            // $('p').html('<br/>Selected Radio Button Value is : <b>' + selValue + '</b>');


            for (var i = 0; i < choices.length; i++) {

                if (choiceQ1 === choices[i]) {
                    points++;
                    console.log("correct")
                }
                if (choiceQ2 === choices[i]) {
                    points++;
                    console.log(1)
                }
                if (choiceQ3 === choices[i]) {
                    points++;
                    console.log(1)
                }
                if (choiceQ4 === choices[i]) {
                    points++;
                    console.log(1)
                }
                if (choiceQ5 === choices[i]) {
                    points++;
                    console.log(1)
                }
                if (choiceQ6 === choices[i]) {
                    points++;
                    console.log(1)
                }
                if (choiceQ7 === choices[i]) {
                    points++;
                    console.log(1)
                }
                if (choiceQ8 === choices[i]) {
                    points++;
                    console.log(1)
                }
                if (choiceQ9 === choices[i]) {
                    points++;
                    console.log(1)
                }
                if (choiceQ10 === choices[i]) {
                    points++;
                    console.log(1)
                }
                console.log("done");
            }
            $("#score").html( "You scored "  + points + " out of 10"  );
        });
    });


});



    //});



    // ------- funtions -------
    ///--------ADD TIMER FUNCT







// });

