import cardsGenerator from "./cardsGenerator"

export const REMOVE_CARD = 'REMOVE_CARD'

const defaultState = cardsGenerator();

export function cardsReducer(state = defaultState, action) {
    if (action.type === REMOVE_CARD) {
        return state.filter((card) => card.name !== action.cardName)
    }

    return state
}