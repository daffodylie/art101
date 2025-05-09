// Lab 8 - Anon Functions and Callbacks
// Author: Dylan Boyle <dmboyle@ucsc.edu>
// Date: May 8, 2025

//function that adds five
function plusFive(x) {
    return x + 5;
}

//testing function
console.log(plusFive(10));
console.log(plusFive(15));
console.log(plusFive(20));

//defining array
numArray = [15, 16, 17, 18]
console.log("My Array: ", numArray);

//mapping the array
let results = numArray.map(plusFive);

//expected results: 20, 21, 22, 23
console.log("Results: ", results);

//anon function that multiplies by 5
let multiplied = numArray.map(function(x){
    return x * 5
})

//expected results: 75, 80, 85, 90
console.log("Results: ", multiplied);

//Your map results data
let mapResults  = "Your map results here";

//Use jQuery to select the element by its ID and set the HTML content
$("#output").html(`
    <p><strong>Original Array:</strong> [${numArray.join(", ")}]</p>
    <p><strong>Adding 5:</strong> [${results.join(", ")}]</p>
    <p><strong>Multiplying by 5:</strong> [${multiplied.join(", ")}]</p>
`);