import {removeCard} from "./cards/actions";
import {addCard, nextPlayer} from "./players/actions";

function randomInt(min, max){
    return Math.round(Math.random() * (max - min - 1) + min);
}

export const init = () => {
    return async (dispatch, getState) => {
        const {players} = getState().playersReducer
        const cards = getState().cardsReducer
        for (let i = 0; i < players.length; i++) {
            for (let j = 0; j < 2; j++) {
                let randomCard = cards[randomInt(0, cards.length)]
                await dispatch(addCard(randomCard, i))
                await dispatch(removeCard(randomCard.name))
            }
        }
    }
}

export const giveCard = () => {
    return async (dispatch, getState) => {
        const state = getState();
        const {activePlayer, players} = state.playersReducer
        const cards = state.cardsReducer
        const randomCard = cards[randomInt(0, cards.length)]
        await dispatch(addCard(randomCard, activePlayer))
        await dispatch(removeCard(randomCard.name))
        if(players[activePlayer].score >= 21){
            await dispatch(nextPlayer())
        }
        // if(activePlayer >= players.length){
        //
        // }
    }
}
