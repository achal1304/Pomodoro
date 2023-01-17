
export const addTimer = (timer) => {
    return{
        type : 'ADD_TIMER',
        payload : timer
    }
}

export const playTimer = () => {
    return{
        type : 'PLAY_TIMER',
    }
}

export const puaseTimer = () => {
    return{
        type : 'PAUSE_TIMER',
    }
}