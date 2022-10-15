import React from "react";
import './SingleMovie.css'

const SingleMovie = ({ movie, trailer, displayHome}) => {
    return (
        <section className='single-movie-container'>
           <section className ='movie-detail-wrapper'>
            <img className='single-mini-poster' alt='single-mini-poster' src={ movie.backdrop_path }/>
            <p>{ movie.title }</p>
            <p>Overview: { movie.overview}</p>
            <p>Release Date: { movie.release_date}</p>
            <p>Runtime(min): { movie.runtime }</p>
            <button onClick={() => displayHome()}>Home</button>
            </section>  
        </section>
    )

}

export default SingleMovie;
