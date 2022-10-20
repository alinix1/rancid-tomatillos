import React from 'react'
import { NavLink } from 'react-router-dom';
import './Card.css'
import tomatillo from '../../assets/tomatillo.png';

const Card = ({title, rating, poster, id}) => {
    return (
        <NavLink to = {`/${id}`}>
            <div className = 'card' id = {id}>
                <img className = 'mini-poster' alt='movie poster' src= {poster} />
                <p className = 'card-title'>{ title }</p>
                <div className= 'rating-container'>
                <p className = 'card-rating'><img src = {tomatillo} className = 'tomatillo-image' alt='tomatillo'/> Rating: { rating } </p>
                </div>
            </div>
        </NavLink>    
    )
}


export default Card;