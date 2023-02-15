// Author: Juan Quezada
// Date: 11/02/2023
// Subject: Javascript-BYU

// Here we will say to our API how many pokemons we want to call.

const pokemonCount = 500;
var pokedex = {};

// This is the code that makes the magic happen. This code will call our "getPokemon" function and will 
//bring all the pokemons that we asked. 

window.onload = async function () {
    getPokemon(1);
    for (let i = 1; i < pokemonCount; i++) {
        await getPokemon(i);
        let pokemon = document.createElement("div");
        pokemon.id = i;
        pokemon.innerText = i.toString() + ". " + pokedex[i]["name"].toUpperCase();
        pokemon.classList.add("pokemon-name");

        //Here we add an eventlistener to update our pokemon list. 
        pokemon.addEventListener("click", updatePokemon)
        document.getElementById("pokemon-list").append(pokemon);

    }
    // Here we will send our informaion to HTML
    document.getElementById("pokemon-description").innerText = pokedex[1]["desc"];
    document.getElementById("pokemon-img").src = pokedex[1]["img"];

}
// This is the function that use the fetch funtion to bring the pokemon from the API.
async function getPokemon(num) {
    let url = "https://pokeapi.co/api/v2/pokemon/" + num.toString();
    let res = await fetch(url);
    let pokemon = await res.json();

    //We will save all the information that we bring.
    let pokemonName = pokemon["name"];
    let pokemonType = pokemon["types"];
    let pokemonImg = pokemon["sprites"]["front_default"];

    res = await fetch(pokemon["species"]["url"]);
    let pokemonDesc = await res.json();

    pokemonDesc = pokemonDesc["flavor_text_entries"][9]["flavor_text"]

    pokedex[num] = { "name": pokemonName, "img": pokemonImg, "types": pokemonType, "desc": pokemonDesc }
}
// This funtion help us to update our list in HTML. 
function updatePokemon() {
    document.getElementById("pokemon-img").src = pokedex[this.id]["img"];

    let typesDiv = document.getElementById("pokemon-types");
    while (typesDiv.firstChild) {
        typesDiv.firstChild.remove();

    }
    let types = pokedex[this.id]["types"];
    for (let i = 0; i < types.length; i++) {
        let type = document.createElement("span");
        type.innerText = types[i]["type"]["name"].toUpperCase();
        type.classList.add("type-box");
        type.classList.add(types[i]["type"]["name"]);
        typesDiv.append(type);

    }

    document.getElementById("pokemon-description").innerText = pokedex[this.id]["desc"];
}


// This is the other part of the code that I want to continue developing. 
function addButton(id) {
    var btn = document.createElement("BUTTON");
    var t = document.createTextNode("Click me");
    btn.appendChild(t);
    btn.id = id;
    document.body.appendChild(btn);
}
function removeButton(id) {
    var btn = document.getElementById(id);
    btn.parentNode.removeChild(btn);
}

