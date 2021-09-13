import CardsList from "./CardsList";

function Player({ player }) {
    return (
        <div className='player__card'>
            <div className='player__name'>{player.name}</div>
            <CardsList cards={player.cards} />
            <div className='player__score'>{player.score}</div>
        </div>
    )
}

export default Player