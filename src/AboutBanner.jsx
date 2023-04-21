import React from 'react'
import './aboutbanner.css'


export const AboutBanner = () => {
  return (
    <header className='featured-about'>
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

