import React from 'react';
import Card from '../Card/Card';
import './Movies.css'

const Movies = ( {movies} ) => {
    const movieCards = movies.map(movie => {
        return (
            <Card
            title = {movie.title}
            poster = {movie.poster_path}
            rating = {Math.round(movie.average_rating)}
            id = {movie.id}
            key = {movie.id}
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