import React from 'react'
import './Card.css'

const Card = ({title, rating, poster, id, showSingleMovie}) => {
    return (
        <div className = 'card' id = {id} onClick ={event => showSingleMovie(event)}>
            <img className = 'mini-poster' alt='movie poster' src= {poster} />
            <p className = 'card-title'>{ title }</p>
            <p className = 'card-rating'>Rating: { rating } 🍅</p>
        </div>
    )
}


export default Card;