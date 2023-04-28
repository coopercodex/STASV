import React from 'react'
import './banner.css'
// import sound from '../assets/paradise-island-96456.mp3'
// import ReactAudioPlayer from 'react-audio-player'


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
        {/* {location.pathname == '/' ? (
          <ReactAudioPlayer
            className='music-player'
            src={sound}
            autoPlay={true}
            controls
            controlsList='nodownload'
            volume={.5}
          />
        ) : null} */}
      </header>
    </div>
  )
}
