import React from 'react'
import { useState, useEffect } from 'react';
import { useRef } from 'react';
import '../assets/styles/Timer.css'
import { SECOND, MINUTE } from '../constants/timerConstant';
import AlarmSound from '../assets/music/alarm.mp3'

function Timer({ timeRemaining }) {
    const [timer, settimer] = useState(timeRemaining);
    const [isPaused, setisPaused] = useState(true);
    const alarmPlayer = useRef(null);
    console.log(timeRemaining);

    useEffect(() => {
        console.log("isPaused",isPaused,"  ")
        var intervalId = 0;
        var timerCurrent = timer;
        if (!isPaused && timerCurrent > 0) {
            console.log("starting timer at time ",timerCurrent);
            intervalId = setInterval(() => {
                if(timerCurrent >= 1){
                    timerCurrent -= 1
                    settimer(timerCurrent)     
                }
                else if(!isPaused && timerCurrent < 1){
                    alarmPlayer.current.play();
                    setisPaused(true);
                }    
            }, 1000);
            if(timerCurrent < 1){
                clearInterval(intervalId);
            }
        }
        else if (timerCurrent < 1) {
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
            <audio ref={alarmPlayer} loop={false} src={AlarmSound}/>
            <button onClick={() => { setisPaused(!isPaused) }}>{isPaused ? 'Play':'Pause'}</button>
        </>
    )
}

export default Timer