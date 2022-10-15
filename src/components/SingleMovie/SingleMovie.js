import React from 'react'

const SingleMovie = ({ movie, returnHomePage}) => {
    return (
        <div className='single-movie-container'>
            <img className='single-mini-poster' alt='single-mini-poster' src={ movie.backdrop_path }/>
            <p>{ movie.title }</p>
            <p>{ movie.overview}</p>
            <p>{ movie.release_date}</p>
            <p>{ movie.runtime }</p>
            <button onClick={() => returnHomePage()}>home</button>
        </div>
    )

// componentDidMount = (id) => {
//    getAllData('/movies/${id}').then(data => {
//       this.setState({movie: data[0].movies})
//     })
//   }

// }
}

export default SingleMovie;

