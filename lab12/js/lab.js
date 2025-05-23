// Lab 12 - Conditionals
// Author: Dylan Boyle <dmboyle@ucsc.edu>
// Date: May 22, 2025

//Create function that takes a number, returns a talent
function chooseTalent(str) {
  let length = str.length;
  const mod = length % 4;
  let talent = "";
  let images = ["img/fauna.png", "img/flora.png", "img/elemental.png", "img/arts-and-crafts.png"];
  //assign type based on remainder
  if (mod == 0) {
    talent = "Fauna Type";
    imageURL = images[mod];
  } else if (mod == 1) {
    talent = "Flora Type";
    imageURL = images[mod];
  } else if (mod == 2) {
    talent = "Elemental Type"
    imageURL = images[mod];
  } else if (mod == 3) {
    talent = "Arts and Crafts Type"
    imageURL = images[mod];
  }

  return talent
};

//attach click handler to button
$("#submit").click(function(){
  //take value of input, assign a variable name
  let name = $("#input").val()
  //get the type
  let talent = chooseTalent(name);
  //add type to output
  $("#output").html("Your talent type is: " + talent + "<br><img class='talent-image' src='" + imageURL + "'>");
});