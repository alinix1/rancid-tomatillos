// import './SingleMovie.css';
// import React from 'react';








// componentDidMount = (id) => {
//     fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}')
//     .then(response => {
//       if(!response.ok) {
//         throw new Error (response.status + ":" + response.statusText)
//       } else {
//         return response.json()
//       }
//     })
//     .then(data => this.setState({movies: data.movies}))
//     .catch(error => this.setState({error: error}))
//   }