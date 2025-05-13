// Lab 9 - Libraries and jQuery
// Author: Dylan Boyle <dmboyle@ucsc.edu>
// Date: May 12, 2025

// add button to challenge section
//$("#challenge").append("<button id='button-challenge'>Make Special</button>");

// add a click listener to the challenge button
//$("#button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    //$("#challenge").toggleClass("special");
//});

// add button to problems section
//$("#problems").append("<button id='button-problems'>Make Special</button>");

// add a click listener to the problems button
//$("#button-problems").click(function(){
    // now add (or subtract) the "special" class to the section
    //$("#problems").toggleClass("special");
//});

// add button to results section
//$("#results").append("<button id='button-results'>Make Special</button>");

// add a click listener to the results button
//$("#button-results").click(function(){
    // now add (or subtract) the "special" class to the section
    //$("#results").toggleClass("special");
//});

// add button to results section
$(".minor-section").append("<button id='special-button'>Make Special</button>");

// add a click listener to the results button
$("#special-button").click(function(){
    // now add (or subtract) the "special" class to the section
    $(this).parent().toggleClass("special");
});