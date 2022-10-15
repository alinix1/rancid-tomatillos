import { getMouseEventOptions } from '@testing-library/user-event/dist/utils';
import React from 'react';
import Card from '../Card/Card';
import './Movies.css'

const Movies = ( {movies, showSingleMovie} ) => {
    const movieCards = movies.map(movie => {
        return (
            <Card
            //logo = {logo} 
            title = {movie.title}
            posterImage = {movie.poster_path}
            rating = {movie.average_rating.toFixed(1)}
            id = {movie.id}
            key = {movie.id}
            showSingleMovie = {showSingleMovie}
            />
        )
    })

    return (
        <div className = 'movies-container'>
            {movieCards}
        </div>
    )

}



export default Movies;