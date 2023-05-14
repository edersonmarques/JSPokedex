const pokemon_list = document.querySelector('#pokemon-list');

fetch('https://pokeapi.co/api/v2/').then(response => {
    return response.json();
}).then(response_body => {
    createPokemonCard(response_body);
});



function createPokemonCard(poke_api_return) {
    let new_poke_card = document.createElement('li');
    pokemon_list.appendChild(new_poke_card);
    pokemon_list.lastChild.classList.add("pokemon-card");
    pokemon_list.lastChild.innerHTML = `
<div class="informations">
    <span>Bulbasaur</span>
    <span>#001</span>
</div>

<img src="images/bulbasaur.gif" alt="Bulbasaur" class="gif">

<ul class="types">
    <li class="grass-type type" >Grama</li>
    <li class="poison-type type" >Veneno</li>
</ul>

<p class="description">Há uma semente de planta em suas costas desde o dia em que este Pokémon nasceu. A semente cresce lentamente.</p>`;
}