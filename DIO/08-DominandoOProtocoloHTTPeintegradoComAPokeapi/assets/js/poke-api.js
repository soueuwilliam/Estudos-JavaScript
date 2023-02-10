
//Declaraçaõ de um objeto
const pokeApi = {}


pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url).then((response) => response.json())
}

//Criando Método para objetos
pokeApi.getPokemon = (offset = 0 ,limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
            .then((response) => response.json())
            .then((jsonbody) => jsonbody.results)
            .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
            .then((detailrequests) => Promise.all(detailrequests))
            .then((pokemondetails) => pokemondetails)
} 