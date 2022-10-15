import React from 'react'
import './Card.css'

const Card = ({title, rating, poster, handleClick, id}) => {
    return (
        <div className = 'card' id= {id} onClick ={(event) => handleClick(event)}>
            <img className = 'mini-poster' alt='movie poster' src= {posterImage} />
            <p className = 'titleCard'>{ title }</p>
            <p className = 'ratingCard'>Rating: ⭐ { rating }</p>
        </div>
    )
}


export default Card;