A trivia game using javascript


$(document).ready(function(){
    var score = 0;
    $("#someDiv").text(score);
​
    var myObj = [
        {
            name: "Ben",
            pets: [
                {
                    name: "lana",
                    breed: "dog",
                    toys: [{ type: "ball"}, {type: "rope"}]
                },
                {
                    name: "bones",
                    breed: "cat",
                    toys: [{ type: "yarn" }, { type: "litter" }]
                }
            ],
            favoritePet: "lana"
        },
        {
            name: "Laura",
            pets: [
                {
                    name: "Scruffy",
                    breed: "dog",
                    toys: [{ type: "pillows" }, { type: "shoes" }]
                },
                {
                    name: "Hallie",
                    breed: "cat",
                    toys: [{ type: "string" }, { type: "treats" }]
                }
            ],
            favoritePet: "Hallie"
        }
    ];
​
    for(var i = 0; i < myObj.length; i++){
        // var text = $("#someDiv").text();
        // text += myObj[i].name;
        // $("#someDiv").text(text);
​
        var div = $("<div>");
        div.text(myObj[i].name);
        div.addClass("divClass");
​
        $("#anotherDiv").append(div);
​
        for(var j = 0; j < myObj[i].pets.length; j++){
            var petName = myObj[i].pets[j].name;
​
            var radio = $("<input type='radio' name='pet-"+i+"' value='"+petName+"'>");
            var div = $("<div>");
​
            div.append(radio);
            div.append(petName)
            $("#anotherDiv").append(radio);
            $("#anotherDiv").append(petName);
​
            for(var k = 0; k < myObj[i].pets[j].toys.length; k++){
                // console.log(myObj[i].pets[j].toys[k].type)
            }
        }
    }
​
    $("#checkAnswers").on("click", function(){
        
        for(var i = 0; i < myObj.length; i++){
​
            var answer = $("input[name='pet-"+i+"']:checked").val();
    
            console.log(answer + "  " + myObj[i].favoritePet);
            if (answer === myObj[i].favoritePet){
                score++;
            }
        }
​
        $("#someDiv").text(score);
    })
})
