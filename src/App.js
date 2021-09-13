import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './storage/index'
import ControlPanel from "./components/ControlPanel";
import PlayersList from './components/PlayersList';

const store = createStore(rootReducer)

export default function App() {
    return (
        <Provider store={store}>
            <div class="wrapper">
                <PlayersList />
                <ControlPanel />
            </div>
            PlayersList
        </Provider>
    )
}