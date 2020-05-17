$(document).ready({
});

var starterAnimals = ["lion", "tiger", "bear", "snake", "hippo", "pig", "turtle", "gorilla"];
//creates the starter animal buttons
function createButtons(){
    $.map(starterAnimals, topic => {
        var animalButtons = $("<button>");
        animalButtons.addClass("animalBTN");
        animalButtons.attr("animalName", topic);
        animalButtons.text(topic).val(topic);
        $("#animalButtons").append(animalButtons);
    })
}

createButtons();
//creates buttons when submit is pushed
$("#animalTxt").on('click', function(event){
    event.preventDefault();
    $("#animalButtons").empty();
    var animalData  = $("#data-input").val().trim();
    starterAnimals.push(animalData);
    createButtons();

});

//Gif functions
$(document).on('click', '.animalBTN', function(event){
    event.preventDefault();
    $("#resultsContainer").empty();
    var btnData = $(this).attr("animalName");
    var animalValue = btnData;
    
    var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + animalValue
                    + "&api_key=J087uKXq8yTPVSnBh2tL8fFOIuWvN4qf&limit=10";
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        $("#resultsContainer").empty();
        $.map(response.data, gif => {
            var gifRating = gif.rating;
            var stillGif = gif.images.downsized_still.url;
            var liveGif = gif.images.downsized_medium.url;

            var gifDiv = $("<div>").addClass("gif-div");
            var imgDiv = $("<div>").addClass("gif-img");
            var Rating = $("<p> Rating: " + gifRating + "</p>");
            var gifImg = $("<img alt ='img'>")
                            .addClass("jpeg")
                            .attr("src", stillGif)
                            .attr("data-jpeg_src", liveGif);
            
           
        $("#resultsContainer").append(gifDiv);
        gifDiv.append(imgDiv);
        imgDiv.append(Rating);
        imgDiv.append(gifImg);

        });
        


        // for ( var i = 0; i < response.length; i++){
        //     var gifRating = response[i].rating;
        //     var stillGif = response[i].images.downsized_still.url;
        //     var liveGif = response[i].images.downsized_medium.url;

        //     var gifDiv = $("<div>").addClass("gifDiv");
        //     var imgDiv = $("<div>").addClass("imgDiv");
        //     var rating = $("<p>Rating: "+ gifRating + "</p>");
        //     var gifImg = $("<img alt='img'>").attr("src", stillGif);
        //         gifImg.attr("data-src", liveGif);

        //     $("reslutsContainer").append(gifDiv);
        //     gifDiv.append(imgDiv);
        //     imgDiv.append(rating).append(gifImg);


        // }
    });

});


