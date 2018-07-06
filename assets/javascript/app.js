$(document).ready(function() {
    
//     function openingScreen() {
//         startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' role='button'>Start Quiz</a></p>";
//         $(".container").html(startScreen);
//     }
//     openingScreen();
var correct = 0;
var incorrect = 0;
var unanswered = 0;

var q1Value = $("#Q1").val();
var q2Value = $("#Q2").val();
var q3Value = $("#Q3").val();
var q4Value = $("#Q4").val();
var q5Value = $("#Q5").val();

    $("#submit").on("click", function() {
        
        // if ($(".true")) {
        //     correct = correct + 1;
        // } else {
        //     incorrect = incorrect + 1;
        // };
        
        // if (".class").input("value", true) {
        //     correct = correct + 1;
        // } else {
        //     incorrect = incorrect + 1;
        // };
        
        if (q1Value = "Ito") {
            correct = correct + 1;
        } else {
            incorrect = incorrect + 1;
        };
        

        if (q2Value = "Vanilla Ice") {
            correct = correct + 1;
        } else {
            incorrect = incorrect + 1;
        };


        if (q3Value = "Fanny Pack") {
            correct = correct + 1;
        } else {
            incorrect = incorrect + 1;
        };


        if (q4Value = "Power Rangers") {
            correct = correct + 1;
        } else {
            incorrect = incorrect + 1;
        };


        if (q5Value = "World Series") {
            correct = correct + 1;
        } else {
            incorrect = incorrect + 1;
        };
        
        
        $("#correct").text("Correct: " + correct);
        $("#incorrect").text("Incorrect: " + incorrect);

    });
    // $("#correct").text("Correct: " + correct);
    // $("#incorrect").text("Incorrect: " + incorrect);
    console.log(correct);
    console.log(incorrect);


}); 




