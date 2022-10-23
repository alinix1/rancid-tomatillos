import React from 'react';
import Card from '../Card/Card';
import './Movies.css'

const Movies = ( {movies, searchQuery} ) => {
    const parsedQuery = searchQuery.toLowerCase();
    const filteredMovies = movies.filter(movie => {
        return movie.title.toLowerCase().includes(parsedQuery)
    });
    const sortedMovies = filteredMovies.sort((a, b) => {
        return a.title.localeCompare(b.title)
    })
    const movieCards = sortedMovies.map(movie => {
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