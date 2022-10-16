import React, { Component } from "react";
import ReactPlayer from "react-player";
import { fetchAllData } from '../../apiCalls';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "./SingleMovie.css";

class SingleMovie extends Component {
  constructor() {
    super();
    this.state = {
      movie: '',
      trailers: [],
      errorMessage: '',
    };
  }

  componentDidMount = () => {
    fetchAllData(`/movies/${this.props.selectedMovie.id}`)
    .then(data => this.setState({movie: data.movie}))
    fetchAllData(`/movies/${this.props.selectedMovie.id}/videos`)
    .then((data) => this.setState({ trailers: data}))
    .catch((error) => this.setState({ errorMessage: 'Something went wrong'}))
    fetchAllData(`/movies/${this.props.selectedMovie.id}`)
    .then(data => this.setState({ movie: data[0].movie }))
    .catch((error) => this.setState({ errorMessage: 'Something went wrong'}))
  };

//   createTrailerSlides = () => {
//     let trailerMovies = this.state.trailers.map((video) => {
//       return (
//         <SwiperSlide className="swiper-slide" key={video.id}>
//           <ReactPlayer
//             controls={true}
//             className="video"
//             url={`https://www.youtube.com/watch/${video.key}`}
//           />
//         </SwiperSlide>
//       );
//     });
//     return trailerMovies;
//   };

  render() {
    return (
      <section className="single-movie-container">
        <img
          className="single-movie-backdrop"
          src={this.state.movie.backdrop_path}
          alt="movie backdrop"
        />
        <section className="movie-detail-wrapper">
          <section className="movie-details">
            <button onClick={() => this.props.returnHome()}>❌</button>
            <h2>{this.state.movie.title}</h2>
            <img
              className="movie-poster"
              src={this.state.movie.poster_path}
              alt="movie poster"
            />
            <p>Overview: {this.state.movie.overview}</p>
            <p>Release Date: {this.state.movie.release_date}</p>
            <p>Genres: {this.state.movie.genres} </p>
            <p>Runtime: {this.state.movie.runtime} minutes</p>
          </section>
          <section className="movie-trailer">
            {/* <Swiper modules={[Navigation, Mousewheel, Keyboard]} slidesPerView = {1} navigation= {true} keyboard={true} mousewheel={true} className="all-swiper-movies">
                {this.createTrailerSlides()}
            </Swiper> */}
          </section>
        </section>
      </section>
    );
  }
}

export default SingleMovie;
