import { ADD_CARD } from "./reducer";

export function ADD_CARD(playerName, card) {
    return {
        type: ADD_CARD,
        playerName,
        card
    }
}