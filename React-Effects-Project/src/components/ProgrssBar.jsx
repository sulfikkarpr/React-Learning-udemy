import React, { useEffect, useState } from 'react'

function ProgrssBar({ timer }) {


    const [remainingTime, setRemainingTime] = useState(timer);

    useEffect(() => {
        // This effect sets up an interval to decrement remainingTime by 10 milliseconds every 10 milliseconds
        const interval = setInterval(() => {

            setRemainingTime((prevTime) => prevTime - 10);
        }, 10);

        // Cleanup function to clear the interval when the component unmounts
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (

        <progress value={remainingTime} max={timer} />


    )
}

export default ProgrssBar