
//  Target//  event//   handler (function)
$(document).ready(function(){

    console.log($("#main-heading"))

    // target            event
    $("#change-heading").click( function(){
        console.log("clicked the button!")
        // Getter
        var color = $("#main-heading").css("color");

        // Setter
        $("#main-heading").css("color", "red");
    })
//     target       event     handler
    $("#change-img").click( function(){
        console.log("Clicked change img btn!")

        if ($("#main-img").css("display") == "none") {
            $("#main-img").fadeIn("slow", function(){
                console.log("Fading IN...");
            })
        }

        $("#main-img").fadeOut("slow", function(){
            console.log("Fading out...");
        })

    });


});

// document.addEventListener("DOMContentLoaded", function() {
    
    
// })