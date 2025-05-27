// Lab 13 - Loops
// Author: Dylan Boyle <dmboyle@ucsc.edu>
// Date: May 26, 2025

function fizzBuzzBoom () {
    let outputStr = "";

 for (i = 1; i <= 100; i++) {
    let num = i;

    if (i % 15 == 0) {
        console.log("FizzBuzz!");
    } else if (i % 35 == 0) {
        console.log("BuzzBoom!");
        outputStr += num + " Fizz!<br>";
    } else if (i % 21 == 0) {
        console.log("FizzBoom!");
        outputStr += num + " Fizz!<br>"; 
    } else if (i % 3 == 0) {
        console.log("Fizz!");
        outputStr += num + " Fizz!<br>";
    } else if (i % 5 == 0) {
        console.log("Buzz!");
        outputStr += num + " Fizz!<br>";
    } else if (i % 7 == 0) {
        console.log("Boom!");
        outputStr += num + " Fizz!<br>";
    } 
 } 

 $("#output").html(outputStr);
}

fizzBuzzBoom()





