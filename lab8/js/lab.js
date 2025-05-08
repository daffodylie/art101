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
    let result = numArray.map(function(x){
        return x * 5
    })

    //expected results: 75, 80, 85, 90
    console.log("Results: ", result);