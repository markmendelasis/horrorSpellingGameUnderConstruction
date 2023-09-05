
var random = Math.random();
var random = Math.floor((random*3)+1);

var spellingAudio = document.querySelector("body > audio").src = "Audio/level" + random + ".mp3";


if (random === 1){
    var random = "BEAUTIFUL";
} else if (random === 2){
    var random = "LISTENING";
} else {
    var random = "PHOTOSYNTHESIS";
}


        // Get references to the input field, button, and output element
        var inputField = document.getElementById("spellSpace");
        var submitButton = document.getElementById("submitButton");
        var output = document.getElementById("output");

        // Add a click event listener to the button
        submitButton.addEventListener("click", function() {
            // Get the value from the input field
            var inputValue = inputField.value;
            // Display the value in the output element
            
            if (inputValue == random) {
                output.textContent = "Correct";
            } else {
                output.textContent = "Wrong";
                var scream = new Audio('scream.mp3');
                scream.play();
                document.querySelector("body > img ").src="black.jpg"
            }

        });




