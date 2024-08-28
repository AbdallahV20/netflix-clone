import React, { useState } from 'react';
import './MovieCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';

interface MovieCardProps {
   isRecentlyAdded : boolean;
   isTopTen : boolean;
   rankNumber : string;
   posterUrl : string;
   description : string;
}

const MovieCard: React.FC<MovieCardProps> = (props: MovieCardProps) => {

    return(
        <div className='mc-div-main'>
            <img src={props.posterUrl} className='img-movie-card'></img>
            <span className='mc-span-rank'>{props.rankNumber}</span>
        </div>
    )
  };
  
  export default MovieCard;
  