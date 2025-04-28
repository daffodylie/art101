// Lab 6 index.js - Arrays and Objects: 
  // Create an array with modes of transportation, an element with your primary mode, and a function that calculates age of vehicle.
// Author: Dylan Boyle <dmboyle@ucsc.edu>
// Date: April 28, 2025

//Define Vehicle
myTransport = [" Hyundai Sonata", " bus", " rides from friends"];

//Create object for my car
myMainRide = {
  make: "Hyundai",
  model: "Sonata",
  color: "blue",
  year: 2016,
  //Define a function that calculates age of my car
  age : function() {
    return 2025 - this.year;
  }
}

//Output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");
