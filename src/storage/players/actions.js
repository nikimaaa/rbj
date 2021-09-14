import { ADD_CARD, NEXT_PLAYER, START } from "./reducer";

export function addCard(card, playerNumber) {
    return {
        type: ADD_CARD,
        playerNumber,
        card
    }
}

export function nextPlayer(){
    return{
        type: NEXT_PLAYER
    }
}

export function clearCards(){
    return{
        type: START
    }
}
