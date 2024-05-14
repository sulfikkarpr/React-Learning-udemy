import React, { useRef, useState } from 'react'
import ResultModel from './ResultModel';

function TimerChallenge({ title, targetTime }) {

    const timer = useRef();
    const dialog = useRef();

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000)

    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if (timeRemaining <= 0) {
        clearInterval(timer.current);
        dialog.current.open();
    }


    const timereset = () => {
        setTimeRemaining(targetTime * 1000);
    }



    const handleStart = () => {
        timer.current = setInterval(() => {
            setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10)
        }, 10)
    }

    const handleStop = () => {
        clearInterval(timer.current);
        dialog.current.open();
    }

    return (
        <>

            <ResultModel targetTime={targetTime} remainingTime={timeRemaining} ref={dialog} onReset={timereset} />

            <section className='challenge'>
                <h2>{title}</h2>
                <p className='challenge-time' >
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart} >{timerIsActive ? 'Stop' : 'Start'} Challenge </button>
                </p>
                <p className={timerIsActive ? 'active' : null}>
                    {timerIsActive ? ' Time is running...' : 'Timer inactive'}
                </p>
            </section >
        </>
    )
}

export default TimerChallenge