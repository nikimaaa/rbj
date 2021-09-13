import Player from "./Player"

const PlayersList = ({ players }) => {
    return (
        <div class="players__wrapper">
            {players.map((player, i) => <Player key={i} player={player} />)}
        </div>
    )
}

export default PlayersList

