$(document).ready({
});

var starterAnimals = ["lion", "tiger", "bear", "snake", "hippo", "pig", "turtle", "gorilla"];

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
