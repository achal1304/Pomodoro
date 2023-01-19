import React from 'react'
import { useState, useEffect } from 'react';
import '../assets/styles/Timer.css'
import { SECOND, MINUTE } from '../constants/timerConstant';


function Timer({ timeRemaining }) {
    const [timer, settimer] = useState(timeRemaining);
    const [isPaused, setisPaused] = useState(false);
    console.log(timeRemaining);

    useEffect(() => {
        var intervalId = 0;
        var timerCurrent = timer;
        if (!isPaused && timerCurrent > 60) {
            intervalId = setInterval(() => {
                settimer((timerCurrent) = timerCurrent - SECOND)
            }, SECOND);
            if(timerCurrent < 60){
                clearInterval(intervalId);
            }
        }
        else if (timerCurrent < 60) {
            clearInterval(intervalId)
        }
        else {
            clearInterval(intervalId)
        }
        return () => {
            clearInterval(intervalId)
        }

    }, [isPaused])

    console.log(timer)
    return (
        <>
            <div className='timer'>
                {Object.entries({
                    Minutes: (timer / MINUTE) % 60,
                    Seconds: (timer / SECOND) % 60
                }).map(([label, value]) => {
                    return (<div key={label} className="col-4">
                        <div className="box">
                            <p>{`${Math.floor(value)}`}</p>
                            <span className="text">{label}</span>
                        </div>
                    </div>)
                })}
            </div>
            <button onClick={() => { setisPaused(!isPaused) }}>Pause</button>
        </>
    )
}

export default Timer