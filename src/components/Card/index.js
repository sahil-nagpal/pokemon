import React  from 'react';
import HighlightedCard from './HighlightedCard'
import beerBottle from '../../assets/image/beer2rm.png';
const Card = ({name,image,types=[]})=>{
    let colors = ['#AB549A','#F3B539']
    return <>
        <div className='container position-relative card-handler'>
            <div className='imager'><img src={image}></img></div>
            <div className='text-header'><span><h2>{name}</h2></span></div>
            <div className='highlighted-card'>
                {types.map((item,index)=>{
                     return <HighlightedCard key={index} name={item} color={colors[index]} />
                })}
                 
            </div>
        </div>
    </>
}
export default Card;