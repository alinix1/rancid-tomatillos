import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import loading from "../../assets/refresh.png";
import { fetchAllData } from "../../apiCalls";
import SingleMovie from "../SingleMovie/SingleMovie";
import Movies from "../Movies/Movies";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      errorMessage: "",
    };
  }

  componentDidMount() {
    fetchAllData("/movies")
      .then((data) => this.setState({ movies: data.movies }))
      .catch((error) => {
        this.setState({
          ...this.state,
          errorMessage: "Something went wrong, please try again!",
        });
      });
  }

  render() {
    return (
      <main className="App">
        <nav>
          <h1 className="main-title">🍿 Rancid Tomatillos 🎬</h1>
        </nav>
        {!this.state.errorMessage && (
          <Switch>
            <Route
              path="/:id"
              render={({ match }) => {
                return <SingleMovie id={match.params.id} />;
              }}
            />
            <Route
              path="/"
              render={() => <Movies movies={this.state.movies} />}
            />
          </Switch>
        )}
        {this.state.errorMessage && (
          <h4 className="error-message">{this.state.errorMessage}</h4>
        )}
        {!this.state.errorMessage && !this.state.movies.length && (
          <div>
            <img src={loading} alt="loading" className="loading-image" />
            <h4>Loading...</h4>
          </div>
        )}
      </main>
    );
  }
}

export default App;
