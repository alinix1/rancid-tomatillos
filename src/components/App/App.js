import logo from './logo.svg';
import movieData from './movieData';
import SingleMovie from './SingleMovie/SingleMovie';
import Movies from './Movies/Movies';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      movies: []
    }
  }

  render() {
    return (
      <main className = 'App'>
        <h1>Rancid Tomatillos</h1>
        <Movies movies = {this.state.movies} />
      </main>
    )
  }

}

export default App;
