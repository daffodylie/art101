// Lab 15 - AJAX
// Author: Dylan Boyle <dmboyle@ucsc.edu>
// Date: June 2, 2025

// Add a click event to the button
$("#activate").click(function() {
    console.log("click!")
    let pokemonName = $("#pokemonInput").val().toLowerCase();
    
    // Defind ajaxObj
    const ajaxObj = {
    url: `https://pokeapi.co/api/v2/pokemon/${pokemonName}`,
    type: "GET",
    dataType: "json"
    }; 
    // When a user clicks the button, use a jQuery AJAX call to fetch output from your API   
    $.ajax(ajaxObj)

     .done(function(data) {
     console.log("success");
     console.log(data);

     let name = data.name;
     let image = data.sprites.front_default;

    // Put the output of the AJAX call in the output div
        $("#output").html(`
            <h2>${name.toUpperCase()}, I CHOOSE YOU!</h2>
            <img src="${image}" alt="${name}" style="max-width: 300px;">
        `);
     })

     .fail(function(xhr, status, errorThrown){
        console.log("Error: " + errorThrown + ", status: " + status);
        $("#output").html("<p style='color:red;'>Pokémon not found. Try again.</p>");
     });
});

