import React from "react";
import {connect} from "react-redux";

import Player from "./Player"

const PlayersList = ({ players, activePlayer }) => {
    return (
        <div className="players__wrapper">
            {players.map((player, i) => <Player key={i} player={player} activePlayer={activePlayer} index={i}/>)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        players: state.playersReducer.players,
        activePlayer: state.playersReducer.activePlayer
    }
}

export default connect(mapStateToProps)(PlayersList)