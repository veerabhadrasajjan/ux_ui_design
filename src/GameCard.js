import React from 'react';

function GameCard({
    gameImage,
    name = "",
    type = "",
    place = "",
    price = ""

}) {
    return (
        <div className='game_card'>
            <img className='game_image' src={gameImage} alt="#"></img>
            <div className='childrens'>
                <h1>{name}</h1>
                <p>{type}</p>
                <p>{place}</p>
                <h2 className='price'>{price}</h2>
            </div>
        </div>
    )
}

export default GameCard;