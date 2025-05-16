// Lab 10 - JavaScript for the Web
// Author: Dylan Boyle <dmboyle@ucsc.edu>
// Date: May 15, 2025

//Function to generate dialogue
function generateRandomText() {
    const text = "When wit, and wine, and friends have met And laughter crowns the festive hour In vain I struggle to forget Still does my heart confess thy power And fondly turn to thee!"
    const min = 3;
    const max = 100;
    const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
    // Get a random starting index to slice the text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    // Generate the random text
    return text.slice(randStart, randStart + randLen);
  }
  
// click listener for button
$("#make-convo").click(function(){
    // get new fake dialogue
    const newText = generateRandomText();
    // append a new div to our output div
    $("#output").append('<div class="text"><p>' + newText + '</p></div>');
});

main();