import React from 'react'
import './Card.css'
import tomatillo from '../../assets/tomatillo.png';

const Card = ({title, rating, poster, id, showSingleMovie}) => {
    return (
        <div className = 'card' id = {id} onClick ={event => showSingleMovie(event)}>
            <img className = 'mini-poster' alt='movie poster' src= {poster} />
            <p className = 'card-title'>{ title }</p>
            <div className= 'rating-container'>
             <p className = 'card-rating'><img src = {tomatillo} className = 'tomatillo-image' alt='tomatillo'/> Rating: { rating } </p>
            </div>
        </div>
    )
}


export default Card;