import React ,{useRef,useEffect, useCallback,useState} from 'react';
import Search from '../../components/Search';
import Card from "../../components/Card";
import { useSelector, useDispatch } from 'react-redux';
import {fetchPokeMon} from '../../store/slices/pokeDataSlice';
import { pokeActions } from '../../store';
import DetailContainer from '../../components/DetailContainer';

let refreshPage = true
const HomePage = ()=>{
    const dispatch = useDispatch()
    let searchRef = useRef()
    const offset  = useSelector(state=> state.pokeData.offset)
    const [scrollHeight,setScrollHeight] = useState()
    const handleNavigation = useCallback((e)=>{
        var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
       setScrollHeight(scrollTop)
    },[offset])
    useEffect(()=>{
        let countScreenScroll = 1
        if (Math.ceil(scrollHeight/100) == countScreenScroll){
            countScreenScroll += countScreenScroll
            if(offset <= 900){
                console.log("real offset >> ",offset)
                // dispatch(fetchPokeMon(offset))
            }
        }
    },[scrollHeight])
    useEffect(()=>{
        window.addEventListener("scroll", (e) => handleNavigation(e));
        if(refreshPage){
            dispatch(fetchPokeMon(0))
            refreshPage = false
        }
    },[])
    const onSearchChange =()=>{
        dispatch(pokeActions.updateForSearchData({"value":searchRef.current.value}))
    }
    let pokemonData = useSelector((state)=> state.pokeData.updatedData)
    return <div className="container-body">
            <div className='show-case-container'>
                <Search ref={searchRef} onChange={onSearchChange}></Search>
                <div className='cards-container'>
                    {pokemonData.map((data,index)=>{return <Card key={index} name={data.name} image={data.image} types={data.types} ></Card>})}
                </div>
            </div>
            <DetailContainer/>
            
    </div>
}

export default HomePage;