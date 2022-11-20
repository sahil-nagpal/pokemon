import React from 'react';
const Search = React.forwardRef((props,ref)=>{
    return <div className='container search-barContainer '>
        <input ref={ref} type={"text"} onChange={props.onChange}></input>
        <button  className='search-btn'><ion-icon name="search-outline" font-size={"17px"}></ion-icon></button>
    </div>
})

export default Search;