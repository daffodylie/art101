// Lab 7 - Functions: 
  // Write a function with window prompting users to imput name. Turn input into array, scramble it, and print it.
// Author: Dylan Boyle <dmboyle@ucsc.edu>
// Date: May 4, 2025

function sortUserName() {
    let userName = window.prompt("Give me your name so I can eat it. I love eating names they are so yummy.");
    console.log("userName =", userName);
    //split string into array
    let userArray = userName.split('');
    console.log("userArray =", userArray);
    //sort the array
    let userArraySort = userArray.sort();
    console.log("userArray.sort =", userArraySort);
    //rejoin the array back to string
   let userSorted = userArraySort.join('');
   console.log("userSorted =", userSorted);
    //print the sorted array
    return userSorted;
}

// output
document.writeln("Uh oh. I feel sick, your name is really gross. *Bleh*: ",
    sortUserName(), "</br>");