import { combineReducers } from "redux";

import { cardsReducer } from "./cards/reducer";
import { playersReducer } from './players/reducer'

export default combineReducers({
    cardsReducer,
    playersReducer
})