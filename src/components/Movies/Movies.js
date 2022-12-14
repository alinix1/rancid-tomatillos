import React, { Component } from 'react';
import Card from '../Card/Card';
import './Movies.css';

class Movies extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
    };
  }

  render() {
    const movies = this.props.movies;
    const filteredMovies = movies.filter(movie => {
        if(this.state.search === '') {
          return true
        } else {
          return movie.title.toLowerCase().includes(this.state.search.toLowerCase())
        }
      })
    const sortedMovies = filteredMovies.sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
    const movieCards = sortedMovies.map((movie) => {
      return (
        <Card
          title={movie.title}
          poster={movie.poster_path}
          rating={Math.round(movie.average_rating)}
          id={movie.id}
          key={movie.id}
        />
      );
    });
    return (
      <div className='all-movies-container'>
        <div className= 'search-container'>
            <input
            type='text'
            aria-label='search'
            className = 'search-bar'
            placeholder='search by title'
            onChange={(e) =>
                this.setState({ ...this.state, search: e.target.value })
            }
            />
        </div>    
        {filteredMovies.length === 0 && movies.length !== 0 && <h4 className= "search-response">Sorry no matching titles. Adjust your search.</h4>}
        <div className='movies-container'>{movieCards}</div>
      </div>
    );
  }
}

export default Movies;
