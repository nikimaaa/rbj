import React from 'react'

import { Provider } from 'react-redux'
import {applyMiddleware, createStore} from 'redux'
import thunk from "redux-thunk";

import ControlPanel from "./components/ControlPanel";
import PlayersList from './components/PlayersList';
import rootReducer from './storage/index'

import './index.scss'

const store = createStore(rootReducer, applyMiddleware(thunk))

export default function App() {
    return (
        <Provider store={store}>
            <div className="wrapper">
                <PlayersList />
                <ControlPanel />
            </div>
            PlayersList
        </Provider>
    )
}