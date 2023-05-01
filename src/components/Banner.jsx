import React from 'react'
import './banner.css'
import ReactPlayer from 'react-player'

export const Banner = ({ image }) => {

  return (
    <div className='cover'>
      <header className='featured-about' style={{ backgroundImage: `url(${image})` }}>
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
        <ReactPlayer
          className='music-player'
          url={'https://www.youtube.com/watch?v=cdApOcplgIw'}
          playing={false}
          loop={true}
          width='250px'
          height='6%'
          controls={true}
          light={true}
          volume={0.4}
          style={{ position: 'absolute', marginTop: '-3.8rem' }}
        />
      </header>
    </div>
  )
}
