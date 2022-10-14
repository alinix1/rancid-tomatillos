import React from 'react'
import './Card.css'

const Card = ({title, rating, posterImage, id, updateView}) => {
    return (
        <div className = 'card'>
            <img className = 'mini-poster' src= {posterImage} onClick = {() => updateView(id)}/>
            <p>{ title }</p>
            <p>{ rating }</p>
        </div>
    )
}


export default Card;