import React, {useMemo} from "react";
import cn from "classnames";

import CardsList from "./CardsList";

function Player({player, activePlayer, index}) {
    const className = useMemo(() => cn(
        'player__card',
        {
            'player__card-active': index === activePlayer,
            'player__card-lose': player.score > 21
        }
    ), [index, player, activePlayer]);

    return (
        <div className={className}>
            <div className='player__name'>{player.name}</div>
            <CardsList cards={player.cards}/>
            <div className='player__score'>{player.score}</div>
        </div>
    )
}

export default Player