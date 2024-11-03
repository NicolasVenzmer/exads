import React from 'react';
import "./Card.css";

function Card({title, description, label, onClick}) {
    return (
        <div className="card">
            <h2 className="card-title">{title}</h2>
            <div className="card-description-container">
                {Array.isArray(description) ? (
                    description.map((line, index) => (
                        <p key={index} className="card-description">{line}</p>
                    ))
                ) : (
                    <p className="card-description">{description}</p>
                )}
            </div>
            <button className="card-button" onClick={onClick}>{label}</button>
        </div>
    );
}

export default Card;
