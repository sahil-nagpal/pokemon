import React ,{useRef,useEffect, useCallback,useState} from 'react';
import Search from '../../components/Search';
import Card from "../../components/Card";
import { useSelector, useDispatch } from 'react-redux';
import {fetchPokeMon} from '../../store/slices/pokeDataSlice';
import { pokeActions } from '../../store';
import DetailContainer from '../../components/DetailContainer';
import pokeMonLoader from '../../../src/assets/image/pokeball-icon.png'

let refreshPage = true
const HomePage = ()=>{
    const dispatch = useDispatch()
    let searchRef = useRef()
    const {offset,updatedData}  = useSelector(state=> state.pokeData)
    const [fetchHomie,setFetchHomie] = useState(false)
    const handleNavigation = useCallback((e)=>{
            if (window.scrollY + 100 >= document.documentElement.scrollHeight - document.documentElement.clientHeight){
                setFetchHomie(true)
                setTimeout(()=>{
                    setFetchHomie(false)
                },2000)
            }
    },[offset])
    useEffect(()=>{
        if(fetchHomie){

            dispatch(fetchPokeMon(offset))
        }
    },[fetchHomie])
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
            {updatedData.length > 0 ? <><div className='show-case-container'>
                <Search ref={searchRef} onChange={onSearchChange}></Search>
                <div className='cards-container'>
                    {pokemonData.map((data,index)=>{return <Card key={index} name={data.name} image={data.image} types={data.types} ></Card>})}
                </div>
            </div>
            <DetailContainer/>
            </>
            :
            <div className='loader-image text-center'>
                    <img style={{width:100,height:100}} className="rotate-loader" src={pokeMonLoader}></img>
                </div>
        }
            
    </div>
}

export default HomePage;