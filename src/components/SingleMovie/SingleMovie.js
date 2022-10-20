import React, { Component } from "react";
import ReactPlayer from "react-player";
import { Link } from 'react-router-dom';
import { fetchAllData } from '../../apiCalls';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Keyboard, Pagination } from "swiper";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
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
    .catch((error) => this.setState({ errorMessage: 'Something went wrong, please try again!'}))

    fetchAllData(`/movies/${this.props.selectedMovie.id}/videos`)
    .then((data) => this.setState({ trailers: data.videos}))
    .catch((error) => this.setState({ errorMessage: 'Something went wrong, please try again!'}))
  };

  createTrailerSlides = () => {
    let trailerMovies = this.state.trailers.map((video) => {
      return (
        <SwiperSlide className="swiper-slide" key={video.id}>
          <ReactPlayer
            controls={true}
            className="video"
            url={`https://www.youtube.com/watch/${video.key}`}
          />
        </SwiperSlide>
      );
    });
    return trailerMovies;
  };

  render() {
    return (
      <section className="single-movie-container">
        <img
          className="single-movie-backdrop"
          src={this.state.movie.backdrop_path}
          alt="movie backdrop"
        />
        <section className="movie-detail-wrapper">
          <div className= 'button'>
            <Link to = '/' >❌</Link>
          </div>
          <h2>{this.state.movie.title}</h2>
          <section className="movie-trailer">
            <Swiper modules={[Navigation, Pagination, Mousewheel, Keyboard]} slidesPerView = {1} pagination = {{clickable: true}} navigation= {true} keyboard={true} mousewheel={true} className="all-swiper-movies">
                {this.createTrailerSlides()}
            </Swiper>
          </section>
          <section className="movie-details">
            <p>Overview: {this.state.movie.overview}</p>
            <p>Release Date: {this.state.movie.release_date}</p>
            <p>Genres: {this.state.movie.genres}</p>
            <p>Runtime: {this.state.movie.runtime} minutes</p>
          </section>
        </section>
        {this.state.errorMessage && <h2>{this.state.errorMessage}</h2>}
      </section>
    );
  }
}

export default SingleMovie;
