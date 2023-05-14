function generatePokemonCard(pokemon_name) {
    let new_poke_card = document.createElement('li');
    pokemon_list.appendChild(new_poke_card);
    pokemon_list.lastChild.classList.add("pokemon-card");
    pokemon_list.lastChild.id = pokemon_name;
    pokemon_list.lastChild.innerHTML = `
    <div class="informations">
        <span class="pokemon-name">${pokemon_name}</span>
        <span class="pokemon-number">#${pokemon_number}</span>
    </div>
    
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon_number}.gif" class="gif">
    
    <ul class="types">
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
    for (const n of api_return.results) {
        generatePokemonCard(n.name);
    }
})
.then(api_return => {
    for (const n of pokemon_list.children) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${n.id}`)
        .then(result => {
            return result.json();
        })
        .then(pokemon_data => {
            for (const pokemon_type of pokemon_data.types) {
                let new_poke_type = document.createElement('li');
                const pokemon_types_list = n.getElementsByClassName('types');
                pokemon_types_list[0].appendChild(new_poke_type);
                pokemon_types_list[0].lastChild.classList.add(pokemon_type.type.name);
                pokemon_types_list[0].lastChild.classList.add('type');
                pokemon_types_list[0].lastChild.innerHTML = pokemon_type.type.name;
            }
        });
    }
});



