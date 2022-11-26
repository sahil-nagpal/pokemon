import axios from 'axios'
import Pokedex from 'pokedex-promise-v2';
let imgurl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
let allPokemonsApi = "https://pokeapi.co/api/v2/pokemon?limit=10&offset="
let getPokemonDetailUrl = "https://pokeapi.co/api/v2/pokemon/"

const Pokemon = new Pokedex();
const getAllPokemons = async(offset)=>{
    let pokeDataArr = []
    try{
        const response =  await axios.get(allPokemonsApi+offset)
        let responseData = await response.data.results
        for (var i in responseData){
            let responseForType = await axios.get(responseData[i].url)
            responseData[i].types = responseForType.data.types.map((item)=>item.type.name)
        }
        pokeDataArr = responseData.map((item,index)=>{return {"_id":index,"name":item.name,"image":imgurl+(item.url.split("/")[item.url.split("/").length-2])+".png","types":item.types}})
        
    }
    catch(err){
        console.log("error in getAllPokemons")
    }
    return Promise.all(pokeDataArr)
}

const getTheOnlyPokemon = async(pokename)=>{
    let pokeObject = {}
    try{
        const response = await axios.get(getPokemonDetailUrl+pokename)
        pokeObject = {...response.data}
        let characterstics = 'Charactersctics still not found'
        let descriptionObj =  ''
       try{
            let charactersticRresponse = await Pokemon.getCharacteristicById(response.data.id)
            let pokemonSpecies = await Pokemon.getPokemonSpeciesByName(response.data.species.name)
            let flavor_text_entries = pokemonSpecies.flavor_text_entries.find(item => item.language.name = "en")
            // characterstics = charactersticRresponse.descriptions
            // descriptionObj = characterstics.filter(item=> item.language.name == 'en')
            pokeObject.description = flavor_text_entries.flavor_text
       }
       catch(err){
        pokeObject.description = characterstics
        console.log("error in character stic api")
       }
        
       
    }
    catch(err){
        console.log("error in getTheOnlyPokemon ::: ",err)
    }
    return pokeObject;
}


export {getAllPokemons,getTheOnlyPokemon}