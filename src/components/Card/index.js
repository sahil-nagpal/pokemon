import React  from 'react';
import HighlightedCard from './HighlightedCard';
import {fetchSinglePokemon} from '../../store/slices/pokeDataSlice'
import { useDispatch } from 'react-redux';
import { getRandomColor } from '../../utils';
const Card = ({name,image,types=[]})=>{
    const dispatch = useDispatch()
    const setDetailedCard = ()=>{
        try{
            dispatch(fetchSinglePokemon(name))
            let ele = document.querySelector('.detail-container').classList.add("active")
        }
        catch(err){
            console.log("error while setting the detailed card",err)
        }
    }
    return <>
        <div className='container position-relative card-handler' onClick={()=>{setDetailedCard()}}>
            <div className='imager'><img src={image}></img></div>
            <div className='text-header'><span><h2>{name}</h2></span></div>
            <div className='highlighted-card'>
                {types.map((item,index)=>{
                     return <HighlightedCard key={index} name={item} color={getRandomColor()} />
                })}
                 
            </div>
        </div>
    </>
}
export default Card;