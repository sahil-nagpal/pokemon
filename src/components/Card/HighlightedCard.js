import React from 'react'
const HighlightedCard = (props)=>{
    return <>
        <div className='card-css' style={{backgroundColor:props.color}}>
            <span>{props.name.charAt(0).toUpperCase() + props.name.slice(1)}</span>
        </div>
    </>
}
export default HighlightedCard;