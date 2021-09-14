import cardsGenerator from "./cardsGenerator"

export const REMOVE_CARD = 'REMOVE_CARD'
export const REFRESH_CARDS = 'REFRESH_CARDS'

const defaultState = cardsGenerator();

export function cardsReducer(state = defaultState, action) {
    if (action.type === REMOVE_CARD) {
        state = state.filter((card) => card.name !== action.cardName)
    }
    if (action.type === REFRESH_CARDS) {
        state = cardsGenerator()
    }

    return state
}