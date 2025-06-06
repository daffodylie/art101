// Lab 16 - JSON and APIs
// Author: Dylan Boyle <dmboyle@ucsc.edu>
// Date: June 5, 2025

$("#button").click(function(){

    // Using the core $.ajax() method
    $.ajax({
        // The URL for the request (from the api docs)
        url: "https://api.allorigins.win/raw?url=https://xkcd.com/info.0.json",
        // Whether this is a POST or GET request
        type: "GET",
        // The type of data we expect back
        dataType : "json",
        // What do we do when the api call is successful
        success: function(comicObj) {
            // Give the section a title using the comicObj.title key from the object
            $("#comicTitle").text(comicObj.title);
            // Create an image tag using the comicObj.img key from the object
                // Give the image an alt and title attributes using the comicObj.alt key from the object
            $("#output").append(
                $("<img>").attr("src", comicObj.img).attr("alt", comicObj.alt)
            );
            
            console.log(comicObj);
        },
        // What we do if the api call fails
        error: function (jqXHR, textStatus, errorThrown) { 
            console.log("Error:", textStatus, errorThrown);
        }
    });
});