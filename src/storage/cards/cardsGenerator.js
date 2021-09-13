const suits = ['♠', '♥', '♣', '♦'];
const names = {
    'A': 11,
    'K': 10,
    'Q': 10,
    'J': 10,
    '10': 10,
    '9': 9,
    '8': 8,
    '7': 7,
    '6': 6,
    '5': 5,
    '4': 4,
    '3': 3,
    '2': 2
};


export default function cardsGenerator() {
    let cards = [];

    for (let key in names) {
        for (let suit of suits) {
            cards.push({
                name: `${key}${suit}`,
                value: names[key]
            });
        }
    }

    return cards;
}