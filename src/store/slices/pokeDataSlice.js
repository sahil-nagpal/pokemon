import { createSlice } from '@reduxjs/toolkit';
import * as pokeapi from '../../api/'
let initialState = {
    "realData":[],
    "updatedData":[],
    "pokemonObject":{},
    "startLoader":false,
    "offset":0,
    "mainLoader":false,
    "scrollLoader":false
} 

const pokeDataSlice = createSlice({
    name:"pokemon",
    initialState,
    reducers:{
        updatePokeData:(state,action)=>{
            try{
                state.realData = state.realData.concat(action.payload.data)
                state.updatedData = state.updatedData.concat(action.payload.data)
                state.offset  += state.updatedData .length
                state.mainLoader = false
                state.scrollLoader = false
            } 
            catch(err){
                console.log("error in updatePokeData ::: ",err)
            }
        },
        handleLoaderAction:(state,action)=>{
            try{
                if (action.payload.type === 'start'){
                    state.startLoader = true
                }
                else if(action.payload.type === 'stop'){
                    state.startLoader = false
                }
                else if(action.payload.type === "main-loader"){
                    state.mainLoader = true
                }
                else if (action.payload.type === "scrollLoader"){
                    state.scrollLoader = true
                }
            }
            catch(err){
                console.log("error in handleLoaderAction ::: ",err)
            }
        },
        updateForSearchData:(state,action)=>{
            try{
                if (action.payload.value.length > 0){
                    state.updatedData = state.realData.filter(item => item.name.startsWith(action.payload.value))
                }
                else{
                    state.updatedData = state.realData
                }
            }
            catch(err){
                console.log("error in updated Search results",err)
            }
        },
        updateDetailedPokemon:(state,action)=>{
            try{
                if (action.payload.type === "Add"){
                    state.pokemonObject = action.payload.data
                    
                }
                if(action.payload.type === "delete"){
                    state.pokemonObject = {}
                }
                state.startLoader = false
                    
            }
            catch(err){
                console.log("error in updateDetailedokemon :: ",err)
            }
        }
    }
})
export const fetchPokeMon = (offset)=>{
    return async (dispatch)=>{
        if(offset === 0){
            dispatch(pokeDataSlice.actions.handleLoaderAction({"type":"main-loader"}))
            let pokemons = await pokeapi.getAllPokemons(offset)
            dispatch(pokeDataSlice.actions.updatePokeData({"data":pokemons}))
        }
        dispatch(pokeDataSlice.actions.handleLoaderAction({"type":"scrollLoader"}))
    }
}
export const fetchSinglePokemon = (name)=>{
    return async (dispatch)=>{
        dispatch(pokeDataSlice.actions.handleLoaderAction({"type":"start"}))
        let pokemon = await pokeapi.getTheOnlyPokemon(name)
        dispatch(pokeDataSlice.actions.updateDetailedPokemon({"data":pokemon,"type":"Add"}))
    }
}
export default pokeDataSlice;
