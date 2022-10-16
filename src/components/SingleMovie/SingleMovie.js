import React from "react";
import './SingleMovie.css'

const SingleMovie = ({ movie, trailers, displayHome}) => {
    return (
        <section className='single-movie-container'>
           <img className = 'single-movie-backdrop' src = {movie.backdrop_path} alt= 'movie backdrop'/> 
           <section className ='movie-detail-wrapper'>
           <button onClick={() => displayHome()}>❌</button>
            <h2>{ movie.title }</h2>
            <img className='movie-poster' src={ movie.poster_path } alt='movie poster'/>
            <p>Overview: { movie.overview}</p>
            <p>Release Date: { movie.release_date}</p>
            <p>Genres: { movie.genres} </p>
            <p>Runtime: { movie.runtime } minutes</p>
            </section>  
        </section>
    )

     //will add in input above for trailers

}

export default SingleMovie;
