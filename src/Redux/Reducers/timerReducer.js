
import { act } from "@testing-library/react";

const initialState = {
    time: '',
    isPlaying: false
}

const timerReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TIMER":
            return { ...state, time: action.payload };
        case "PLAY_TIMER":
            return { ...state, time: true};
        case "PAUSE_TIMER":
            return { ...state, time: false};
        default:
            return state;
    }
}
export default timerReducer;
