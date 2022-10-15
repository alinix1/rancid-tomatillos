import React, {Component} from 'react';
import { getAllData } from '../../apiCalls';
import SingleMovie from '../SingleMovie/SingleMovie';
import Movies from '../Movies/Movies';
import './App.css';

const singleMovie = {"movie": {id: 1, title: "Fake Movie Title", poster_path: "https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg", backdrop_path: "https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg", release_date: "2019-12-04", overview: "Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!", average_rating: 6, genres: ["Drama"], budget:63000000, revenue:100853753, runtime:139, tagline: "It's a movie!" }}

class App extends Component {
  constructor() {
    super();
    this.state = { 
      movies: [],
      viewMode: "All", 
      singleMovie: singleMovie.movie,
      error: null,
    }
  }

  updateView = (id) => {
    console.log(id)
    this.setState({
      ...this.state,
      viewMode: "SingleMovie"
    })
  }

  componentDidMount = () => {
    getAllData('/movies').then(data => {
      this.setState({movies: data[0].movies})
    })
  }

  render() {
    return (
      <main className = 'App'>
        <h1>Rancid Tomatillos</h1>
        {this.state.viewMode === "All" && <Movies movies = {this.state.movies} />}
        {this.state.viewMode === "SingleMovie" && <SingleMovie movie = {this.state.singleMovie} />}
        {this.state.error && <h2>{this.state.error}</h2>}
      </main>
    )
  }

}

export default App;
