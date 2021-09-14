export const ADD_CARD = 'ADD_CARD'
export const NEXT_PLAYER = 'NEXT_PLAYER'
export const START = 'START'

const defaultState = {
    players: [
        {
            name: 'Никита',
            cards: [],
            score: 0
        },
        {
            name: 'Кирилл',
            cards: [],
            score: 0
        },
        {
            name: 'Ян',
            cards: [],
            score: 0
        },
        {
            name: 'Сергей',
            cards: [],
            score: 0
        },
    ],
    activePlayer: 0,
    winnerPlayer: null
}

function addCardToPlayer(player, card) {
    return {
        ...player,
        cards: [...player.cards, card],
        score: player.score + card.value
    };
}

export function playersReducer(state = defaultState, action) {
    if (action.type === ADD_CARD) {
        return {
            ...state,
            players: state.players.map(
                (player, index) => index === action.playerNumber
                    ? addCardToPlayer(player, action.card)
                    : player
            )
        }
    }

    if (action.type === NEXT_PLAYER) {
        return {
            ...state,
            activePlayer: state.activePlayer + 1
        }
    }

    if (action.type === START) {
        return {
            ...state,
            players: state.players.map((player) => ({...player, cards: [], score: 0})),
            activePlayer: state.players[0]
        }
    }

    return state
}