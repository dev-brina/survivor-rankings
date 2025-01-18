"use client"
import { useState } from 'react';
import "./Card.css"

function Card(props) {
    const player = props?.player;
    const [isExpanded, setIsExpanded] = useState(false);

    const handleCardClick = () => {
        setIsExpanded(!isExpanded)
    }

    const handlePlusClick = (event) => {
        event.stopPropagation();
    }

    const handleMinusClick = (event) => {
        event.stopPropagation();
    }

    return (
        <>
            <div  onClick={handleCardClick} className={`player-card ${isExpanded ? 'expanded' : ''} ${player.tribe}`}>
                <div className="player-image">
                    <img src={player.img.src} alt={player.img.alt}/>

                </div>
                <div className="player-info">
                <h3 className="player-name">{player.name}</h3>
                <span className="player-tribe">{player.tribe}</span>


                
                <div className="controls">
                <button onClick={handleMinusClick} className="control minus"><span>-</span></button>
                <button onClick={handlePlusClick} className="control plus"><span>+</span></button>

                </div>

                
                <div className="player-details">
                <span>{player.occupation}</span>
                    <span>{player.age}</span>
                </div>
                </div>
            </div>
        </>
    )
}

export default Card