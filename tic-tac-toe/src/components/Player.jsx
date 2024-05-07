import React, { useState } from 'react'

function Player({ name, symbol, isActive, onChangeName }) {

    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(name);

    const handleEditClick = () => {
        setIsEditing((editing) => !editing);
        if (isEditing) {
            onChangeName(symbol, playerName)
        }
    }
    const handleChange = (e) => {

        setPlayerName(e.target.value)
    }



    let EditplayerName = isEditing ?
        <input type='text' defaultValue={playerName} onChange={handleChange} required /> :
        <span className="player-name"> {playerName}</span>;

    return (
        <li className={isActive ? 'active' : undefined} >
            <span className="player">
                {EditplayerName}
                <span className="player-symbol">{symbol} </span>
            </span>
            <button onClick={handleEditClick} >{isEditing ? 'save' : 'Edit'}</button>
        </li>
    )
}

export default Player