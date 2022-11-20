import React ,{useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import HomePage from '../src/pages/HomePage/index';
import {getAllPokemons} from '../src/api/index';
function App() {
  useEffect(()=>{
    getAllPokemons()
  })
  return (
      <HomePage/>
  );
}

export default App;
