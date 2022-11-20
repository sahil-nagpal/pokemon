import revBeer from '../../assets/gifs/revolving.gif'
const DetailContainer = ()=>{
    return <div className="container detail-container">
        <div className='animatedImage'><img src={revBeer}></img></div>
        <div className='detail-content'>
            <div>
                <h2>Blue Marghreta</h2>
                <div>
                    <span className="text-desc">Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it.</span>
                </div>
                <div className="column-grids">
                    <div className="tabs">
                        <div> <h4>Ingredient</h4> </div>
                        <div>
                            <span className=''>
                                Tequilla
                            </span>
                        </div>
                    </div>
                    <div className="tabs">
                        <div> <h4>Ingredient</h4> </div>
                        <div>
                            <span className=''>
                                vodka
                            </span>
                        </div>
                    </div>
                    <div className="tabs">
                        <div> <h4>Ingredient</h4> </div>
                        <div>
                            <span className=''>
                                whiskey
                            </span>
                        </div>
                    </div>
                    <div className="tabs">
                        <div> <h4>Ingredient</h4> </div>
                        <div>
                            <span className=''>
                                Daru
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default DetailContainer;