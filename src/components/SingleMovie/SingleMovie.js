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
import close from '../../assets/close.png';
import loading from '../../assets/refresh.png';
import "./SingleMovie.css";

class SingleMovie extends Component {
  constructor() {
    super();
    this.state = {
      movie: '',
      trailers: [],
      errorMessage: '',
      videoErrorMessage: ''
    };
  }

  componentDidMount = () => {
    fetchAllData(`/movies/${this.props.id}`)
    .then(data => this.setState({movie: data.movie}))
    .catch((error) => this.setState({errorMessage: 'Something went wrong, please try again!'}))

    fetchAllData(`/movies/${this.props.id}/videos`)
    .then((data) => this.setState({trailers: data.videos}))
    .catch((error) => this.setState({ ...this.state, videoErrorMessage: 'Sorry, error displaying videos.'}))
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
    if(!this.state.movie && !this.state.errorMessage) {
      return <div><img src = {loading} alt='loading' className='loading-image'/><h2>Loading...</h2></div>
    } else if (this.state.errorMessage) {
      return <h2 className= 'error-message'>{this.state.errorMessage}</h2>
    }
    const {backdrop_path, title, overview, release_date, genres, runtime} = this.state.movie
    return (
      <section className="single-movie-container">
        <img
          className="single-movie-backdrop"
          src={backdrop_path}
          alt="movie backdrop"
        />
        <section className="movie-detail-wrapper">
          <div className= 'button'>
            <Link to = '/' ><img src = {close} alt='close' className='close-symbol'/></Link>
          </div>
          <h2>{title}</h2>
          <section className="movie-trailer">
            <Swiper modules={[Navigation, Pagination, Mousewheel, Keyboard]} slidesPerView = {1} pagination = {{clickable: true}} navigation= {true} keyboard={true} mousewheel={true} className="all-swiper-movies">
                {this.createTrailerSlides()}
                {this.state.videoErrorMessage && <h2 className= 'error-message'>{this.state.videoErrorMessage}</h2>}
            </Swiper>
          </section>
          <section className="movie-details">
            <p>Overview: {overview}</p>
            <p>Release Date: {release_date}</p>
            <p>Genres: {genres.join(', ')}</p>
            <p>Runtime: {runtime} minutes</p>
          </section>
        </section>
      </section>
    );
  }
}

export default SingleMovie;
