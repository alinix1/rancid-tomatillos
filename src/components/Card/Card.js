import React from 'react'
import { Link } from 'react-router-dom';
import './Card.css'
import tomatillo from '../../assets/tomatillo.png';

const Card = ({title, rating, poster, id}) => {
    return (
        <Link to = {`/${id}`}>
            <section className = 'card' data-cy="individual-movie" id = {id}>
                <img className = 'mini-poster' alt='movie poster' src= {poster} />
                <p className = 'card-title' data-cy="title">{ title }</p>
                <div className= 'rating-container'>
                <p className = 'card-rating' data-cy="rating"><img src = {tomatillo} className = 'tomatillo-image' alt='tomatillo'/> Rating: { rating } </p>
                </div>
            </section>
        </Link>    
    )
}


export default Card;