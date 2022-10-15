import React, {Component} from 'react';
import { getAllData } from '../../apiCalls';
import SingleMovie from '../SingleMovie/SingleMovie';
import Movies from '../Movies/Movies';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      movies: [],
      isClicked: false,
      movie: [],
      error: null,
    }
  }

  componentDidMount = () => {
    getAllData('/movies').then(data => {
      this.setState({movies: data[0].movies})
    })
  }

  handleClick = (event) => {
    console.log(event)
    getAllData(`/movies/${event.currentTarget.id}`).then(data => {
      this.setState({isClicked: true, movie: data[0].movie})
    })
  }

  displayHome = () => {
    this.setState({isClicked: false})
  }

  render() {
    return (
      <main className = 'App'>
        <h1>Rancid Tomatillos</h1>
        {!this.state.isClicked && <Movies movies = {this.state.movies} handleClick = {this.handleClick}/>} 
        {this.state.isClicked && <SingleMovie movie = {this.state.movie} displayHome = {this.displayHome}/>}
        {this.state.error && <h2>{this.state.error}</h2>}
      </main>
    )
  }

}

export default App;
