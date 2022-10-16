import React from 'react'
import './Card.css'

const Card = ({title, rating, poster, handleClick, id}) => {
    return (
        <div className = 'card' id= {id} onClick ={(event) => handleClick(event)}>
            <img className = 'mini-poster' alt='movie poster' src= {poster} />
            <p className = 'card-title'>{ title }</p>
            <p className = 'card-rating'>Rating: { rating } 🍅</p>
        </div>
    )
}


export default Card;