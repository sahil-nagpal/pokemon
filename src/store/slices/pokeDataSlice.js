import { createSlice } from '@reduxjs/toolkit';
import * as pokeapi from '../../api/'
let initialState = {
    "realData":[],
    "updatedData":[],
} 

const pokeDataSlice = createSlice({
    name:"pokemon",
    initialState,
    reducers:{
        updatePokeData:(state,action)=>{
            try{
                state.realData = action.payload.data
                state.updatedData = action.payload.data
            }
            catch(err){
                console.log("error in updatePokeData ::: ",err)
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
        }
    }
})
export const fetchPokeMon = ()=>{
    return async (dispatch)=>{
        let pokemons = await pokeapi.getAllPokemons()
        dispatch(pokeDataSlice.actions.updatePokeData({"data":pokemons}))
    }
}
export default pokeDataSlice;
