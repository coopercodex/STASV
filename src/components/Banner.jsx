import React from 'react'
import './banner.css'


export const Banner = ({image}) => {
    return (
        <header className='featured-about' style={{backgroundImage: `url(${image})`}}>
            <div className='featured-movies'>
                <h1 className='featured-title'>
                    {/* {movie?.title || movie?.name || movie?.original_name} */}
                </h1>
                <div className="featured-buttons">
                    {/* <Link to={`/movieDetails/${movie?.id}`} state={{ movie }} className="featured-button">Play</Link>
        <Link to='/favorite'><button className="featured-button-list">My List</button></Link> */}
                </div>
                <h1 className='featured-description'>
                    {/* {movie?.overview} */}
                </h1>
            </div>
            <div className='fade-bottom' />

        </header>
    )
}
