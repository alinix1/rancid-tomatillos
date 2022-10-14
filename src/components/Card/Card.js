import React from 'react'
import './Card.css'

const Card = ({title, rating, posterImage, id, updateView}) => {
    return (
        <div className = 'card'>
            <img className = 'mini-poster' alt='movie poster' src= {posterImage} onClick = {() => updateView(id)}/>
            <p>{ title }</p>
            <p>Rating: { rating }</p>
        </div>
    )
}


export default Card;