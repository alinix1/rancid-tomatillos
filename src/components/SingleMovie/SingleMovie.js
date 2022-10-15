import React from 'react'

const SingleMovie = ({ movie, returnHomePage, id }) => {
    return (
        <div className='single-movie-container'>
            <img className='single-mini-poster' alt='single-mini-poster' src={ movie.backdrop_path } style={{height: 300}}/>
            <p style={{color: 'white'}}>{ movie.title }</p>
            <p>{ movie.overview}</p>
            <p style={{color: 'white'}}>{ movie.release_date}</p>
            <p>{ movie.runtime }</p>
            <button onClick={() => returnHomePage()}>home</button>
        </div>
    )
}

export default SingleMovie