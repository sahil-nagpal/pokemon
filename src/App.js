import React ,{useEffect} from 'react'
import './App.css';
import HomePage from '../src/pages/HomePage/index';
function App() {
  document.body.addEventListener('click', ()=>{
    document.querySelector('.detail-container').classList.remove("active")
  }, true); 
  return (
      <HomePage/>
  );
}

export default App;
