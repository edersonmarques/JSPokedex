function generatePokemonCard(pokemon_name) {
    let new_poke_card = document.createElement('li');
    pokemon_list.appendChild(new_poke_card);
    pokemon_list.lastChild.classList.add("pokemon-card");
    pokemon_list.lastChild.innerHTML = `
    <div class="informations">
        <span class="pokemon-name">${pokemon_name}</span>
        <span class="pokemon-number">#${pokemon_number}</span>
    </div>
    
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon_number}.gif" alt="Pokemon Gif" class="gif">
    
    <ul class="types">
        <li class="type grass-type">lorem</li>
        <li class="type poison-type">lorem</li>
    </ul>
    
    <p class="description">lorem ipsum dlor it amet sarut jsnjfbdhfbjf jfkfjkg kdfbbghfg hebfb ghkb frfr grgbkgungj jrgkgjng jrgrng gnfgj g gjgngj gjgngng</p>`;
    pokemon_number++;
}


const pokemon_list = document.querySelector('#pokemon-list');
let pokemon_number = 1;

fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
.then(result => {
    return result.json();
})
.then(api_return => {
    console.log(api_return);
    for (const n of api_return.results) {
        generatePokemonCard(n.name);
    }
});



