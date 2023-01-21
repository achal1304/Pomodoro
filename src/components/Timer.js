import React from 'react'
import { useState, useEffect } from 'react';
import '../assets/styles/Timer.css'
import { SECOND, MINUTE } from '../constants/timerConstant';


function Timer({ timeRemaining }) {
    const [timer, settimer] = useState(timeRemaining);
    const [isPaused, setisPaused] = useState(true);
    console.log(timeRemaining);

    useEffect(() => {
        console.log("isPaused",isPaused,"  ")
        var intervalId = 0;
        var timerCurrent = timer;
        if (!isPaused && timerCurrent > 0) {
            console.log("starting timer at time ",timerCurrent);
            intervalId = setInterval(() => {
                settimer((timerCurrent) = timerCurrent - 1)
            }, 1000);
            if(timerCurrent < 1){
                clearInterval(intervalId);
            }
        }
        else if (timerCurrent < 1) {
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
                    Minutes: (timer / SECOND) % 60,
                    Seconds: (timer) % 60
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