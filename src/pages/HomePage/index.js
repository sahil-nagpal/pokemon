import React ,{useRef,useEffect} from 'react';
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
    useEffect(()=>{
        if(refreshPage){
            dispatch(fetchPokeMon())
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
            
            <div>
                <DetailContainer/>
            </div>
    </div>
}

export default HomePage;