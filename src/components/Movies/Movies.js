import React from 'react';
import Card from '../Card/Card';
import './Movies.css'

const Movies = () => {
    const movieCards = movies.map(movie => {
        return (
            <Card 
            title= {movie.title}
            poster_path = {movie.poster_path}
            average_rating = {movie.average_rating}
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