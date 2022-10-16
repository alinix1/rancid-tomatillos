import React, {Component} from 'react';
import loading from '../../refresh.png';
import { fetchAllData } from '../../apiCalls';
import SingleMovie from '../SingleMovie/SingleMovie';
import Movies from '../Movies/Movies';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      movies: [],
      selectedMovie: [],
      errorMessage: '',
      homeButton: false
    }
  }

  componentDidMount() {
    fetchAllData('/movies')
    .then(data => this.setState({movies: data.movies}))
    .catch(error => this.setState({errorMessage: 'Something went wrong'}))
  }

  showSingleMovie = (event) => {
    console.log(event.currentTarget.id)
    let selectedMovie = `/movies/${parseInt(event.currentTarget.id)}`
    fetchAllData(selectedMovie)
    .then(data => this.setState({selectedMovie: data.movie, homeButton: true}))
  }

  returnHome = () => {
    this.setState({homeButton: false})
  }

  render() {
    return (
      <main className = 'App'>
        <h1 className ='main-title'>Rancid Tomatillos</h1>
        {this.state.homeButton ? <SingleMovie selectedMovie = {this.state.selectedMovie} returnHome = {this.returnHome}/> : <Movies movies = {this.state.movies} showSingleMovie = {this.showSingleMovie}/>}
        {this.state.error && <h2>{this.state.error}</h2>}
        {!this.state.error && !this.state.movies.length && <div><img src = {loading} alt='loading' className='loading-image' /><h2>Loading...</h2></div>}
      </main>
    )
  }

}

export default App;
