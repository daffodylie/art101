// Lab 11 - JavaScript Events and Forms
// Author: Dylan Boyle <dmboyle@ucsc.edu>
// Date: May 19, 2025

// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
  // We have to convert our string to an array and back again to sort it
  return inputString.split('').sort().join('');
}

// click listener for button
$("#submit").click(function(){

// get value of input field
const userName = $("#user-name").val();
// now let's sort it
userNameSorted = sortString(userName);

// append a new div to our output div
$("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');

});

// add button to bottom of page
$("#content").append("<button id='dark-mode'>Dark Mode</button>");

// add a click listener to the results button
$("#dark-mode").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#whole-page").toggleClass("special");
});

