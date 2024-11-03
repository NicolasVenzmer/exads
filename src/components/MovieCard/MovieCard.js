import React from 'react';
import "./MovieCard.css";

function MovieCard({title, image, index, onClick}) {
    return (
        <div className="movie-card" onClick={() => onClick(index)}>
            <img src={image} alt={title}/>
        </div>
    );
}

export default MovieCard;
