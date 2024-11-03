import React from 'react';
import "./MovieCard.css";

function MovieCard({ index, title, image, handleSelection }) {
    return (
        <div key={index} className="movie-card" onClick={()=> handleSelection(index)}>
            <img src={image} alt={title} />
        </div>
    );
}

export default MovieCard;
