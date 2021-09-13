
export const ADD_CARD = 'ADD_CARD'

const defaultState = [
    {
        name: 'Nikita',
        cards: [],
        score: 0
    },
    {
        name: 'Vova',
        cards: [],
        score: 0
    },
]

export function playersReducer(state = defaultState, action) {
    if (action.type === ADD_CARD) {
        return state.reduce((player) => {
            if (player.name === action.playerName) {
                acc.push({
                    ...player,
                    cards: [...player.cards, action.card],
                    score: player.score + action.card.value
                })
            }
            else {
                acc.push(player)
            }
        }, [])
    }
    return state
}