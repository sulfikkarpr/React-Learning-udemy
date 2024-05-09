import React from 'react'

function Userinput({ children, value, handleChange, name }) {
    return (
        <p>
            <label htmlFor={children}>{children}</label>
            <input type='number' onChange={(e) => handleChange(name, e.target.value)} defaultValue={value} id={children} />
        </p>
    )
}

export default Userinput