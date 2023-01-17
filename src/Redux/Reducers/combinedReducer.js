import timerReducer from "./timerReducer"
import {combineReducers} from 'redux'


const allReducer = combineReducers({
    timer: timerReducer
})

export default allReducer;