



function  convertPokemonTypeToLi(pokemonTypes){
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}
function ConvertPokemonToLi(pokemon) {
    return `
    <li class="pokemon">
       <span class="number">${pokemon.order}</span>
        <span class="name">${pokemon.name}</span>
        <div class="detail">
            <ol class="types">
                <li class="type">grass</li>
                <li class="type">poison</li>
            </ol>

            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                alt="${pokemon.name}">
        </div>
    </li>
    
    `
}

const pokemonList = window.document.getElementById('pokemonList')


//Metódo fetch para pegar um API e retornar um promisse 
pokeApi.getPokemon().then((pokemons =[]) => {
        
    pokemonList.innerHTML =  pokemons.map(ConvertPokemonToLi).join('') 
    
})
    
