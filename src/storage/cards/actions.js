import {REMOVE_CARD} from "./reducer";

export function removeCard(name) {
    return {
        type: REMOVE_CARD,
        name
    }
}