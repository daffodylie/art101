// Lab 9 - Libraries and jQuery
// Author: Dylan Boyle <dmboyle@ucsc.edu>
// Date: May 12, 2025

// add button to all sections
$(".minor-section").append("<button class='special-button'>Make Special</button>");

// add a click listener to the all buttons
$(".special-button").click(function(){
    // now add (or subtract) the "special" class to the section
    $(this).parent().toggleClass("special");
    console.log("Pressed")
});