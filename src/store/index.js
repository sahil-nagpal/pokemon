import { configureStore } from '@reduxjs/toolkit'
import pokeDataSlice from './slices/pokeDataSlice';
export const store = configureStore({
  reducer: {"pokeData":pokeDataSlice.reducer}
})

export const pokeActions = pokeDataSlice.actions