import React from "react";
import './SingleMovie.css'

const SingleMovie = ({ movie, trailers, displayHome}) => {
    return (
        <section className='single-movie-container'>
           <section className ='movie-detail-wrapper'>
            <h2>{ movie.title }</h2>
            <img className='single-movie-poster' alt='movie poster' src={ movie.poster_path }/>
            <p>Overview: { movie.overview}</p>
            <p>Release Date: { movie.release_date}</p>
            <p>Runtime(min): { movie.runtime }</p>
            <button onClick={() => displayHome()}>Home</button>
            </section>  
        </section>
    )

     //will add in input above for trailers

}

export default SingleMovie;
