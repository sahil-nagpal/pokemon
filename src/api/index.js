import axios from 'axios'
let imgurl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
let gifUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/'
let allPokemonsApi = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0"


const getAllPokemons = async()=>{
    let pokeDataArr = []
    try{
        const response =  await axios.get(allPokemonsApi)
        let responseData = await response.data.results
        for (var i in responseData){
            let responseForType = await axios.get(responseData[i].url)
            responseData[i].types = responseForType.data.types.map((item)=>item.type.name)
        }
        pokeDataArr = responseData.map((item,index)=>{return {"_id":index,"name":item.name,"image":imgurl+(index+1)+".png","types":item.types}})
        
    }
    catch(err){
        console.log("error in getAllPokemons")
    }
    return Promise.all(pokeDataArr)
}

export {getAllPokemons}