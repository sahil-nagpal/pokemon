import React ,{useEffect} from 'react'
import './App.css';
import HomePage from '../src/pages/HomePage/index';
import pokemon from '../src/assets/image/pokeball-icon.png';
import {useSelector} from 'react-redux'
function App() {
  const mainLoader = useSelector(state => state.pokeData.mainLoader)
  document.body.addEventListener('click', ()=>{
    document.querySelector('.detail-container').classList.remove("active")
  }, true); 
  return (
    <>{!mainLoader ?
      <HomePage/>
    : <>
      <div className='loader-image main-loader'>
                    <img style={{width:100,height:100}} className={"rotate-loader"} src={pokemon}></img>
                </div>
    </>
    }
  </>);
}

export default App;
