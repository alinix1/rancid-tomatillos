import logo from './logo.svg';
import { movieData, singleMovie } from './movieData';
import SingleMovie from './SingleMovie/SingleMovie';
import Movies from './Movies/Movies';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      movies: movieData.movies,
      viewMode: "All", 
      singleMovie: singleMovie.movie
    }
  }

  updateView = (id)  => {
    console.log(id)
    this.setState({
      ...this.state,
      viewMode: "SingleMovie"
    })
  }

  render() {
    let viewPane = null
    if(this.state.viewMode === "All") {
      viewPane = <Movies movies = {this.state.movies} />
    } else {
      viewPane = <SingleMovie movie = {this.state.singleMovie} />
    }
    return (
      <main className = 'App'>
        <h1>Rancid Tomatillos</h1>
        { viewPane }
      </main>
    )
  }

}

export default App;
