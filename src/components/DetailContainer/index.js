import React ,{useEffect,useState} from 'react';
import ashImage from '../../assets/image/no-pokemon-selected-image.png';
import pokeMonLoader from '../../assets/image/pokeball-icon.png';
import { useDispatch,useSelector } from 'react-redux';
import { getRandomColor,getThreeWords,getAnyColor } from '../../utils';
import HighlightedCard from '../Card/HighlightedCard';
const DetailContainer = ()=>{
    const {pokemonObject,startLoader} = useSelector(state => state.pokeData)
    const [gifUrl,setGifUrl] = useState(ashImage)
    let colors = ['#AB549A','#F3B539']
    useEffect(()=>{
        if(Object.keys(pokemonObject).length > 0){
            setGifUrl(pokemonObject.sprites.versions['generation-v']['black-white']['animated']['front_default'])
        }
    },[pokemonObject])
    return <div className="container detail-container">
        
        <div className='animatedImage'><img src={gifUrl}></img></div>
        {
            Object.keys(pokemonObject).length > 0 && !startLoader ? <div className='detail-content'>
                <div>
                    <h2>{pokemonObject?.name}</h2>
                    <div>
                        <span className="text-desc">{pokemonObject.description}</span>
                    </div>
                    <div className='mt-20 abilities'>
                        {pokemonObject?.types.map((item,index)=>{
                            return <HighlightedCard key={index} name={item.type.name} color={getRandomColor()}></HighlightedCard>
                        })}
                    </div>
                    <div className="column-grids">
                        <div className="tabs">
                            <div> <h4>Height</h4> </div>
                            <div>
                                <span className=''>
                                {pokemonObject?.height}
                                </span>
                            </div>
                        </div>
                        <div className="tabs">
                            <div> <h4>Weight</h4> </div>
                            <div>
                                <span className=''>
                                    {pokemonObject?.weight}
                                </span>
                            </div>
                        </div>
                    </div>
                        <div className='detail-header mt-20'>
                            <h3>Abilities</h3>
                        </div>
                        <div className="column-grids">
                            {pokemonObject.abilities.map((item,index)=>{
                                return (<React.Fragment key={item.ability.name + "__"+index}>
                                    {index < 2 && <div key={index} className="tabs">
                                        <div></div>
                                        <div>
                                            <span className=''>
                                                {item.ability.name}
                                            </span>
                                        </div>
                                    </div>}
                                </React.Fragment>)
                                })
                            }
                            
                        </div>
                        <div className='detail-header mt-20'>
                            <h3>Stats</h3>
                        </div>
                        <div className='cyllinder-cards'>        
                                {pokemonObject.stats.map((item,index)=>{
                                    return <div key={index} className='cyllinder-outer'>
                                        <div style={{backgroundColor:getAnyColor()}} className='cyllinder-circle'>{getThreeWords(item.stat.name)}</div>
                                        <h5 className='ranks'>{item.base_stat}</h5>
                                    </div>
                                })}
                        </div>
                    </div>
            </div>
        :
            <div className='lh-500'>
                <span className="text-desc">Select a pokemon to see his detail</span>
                <div className='loader-image'>
                    <img style={{width:100,height:100}} className={startLoader?"rotate-loader":""} src={pokeMonLoader}></img>
                </div>
            </div>
        }
    </div>
}
export default DetailContainer;