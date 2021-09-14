import React, {useCallback, useEffect} from "react";

import {connect} from "react-redux";
import {nextPlayer} from "../storage/players/actions";
import {giveCard, init} from "../storage/thunk";

const ControlPanel = ({cards, nextPlayer, init, giveCard}) => {
    const onSkipButton = useCallback(() => {
        nextPlayer()
    }, [nextPlayer])

    const onNewCardButton = useCallback(() => {
        giveCard()
    }, [giveCard])

    useEffect(() => {
        init()
    },[init])

    return (
        <div className="control__panel">
            <div className='buttons__wrapper'>
                <div className="button__card" onClick={onNewCardButton}>
                    New
                </div>
                <div className="button__card" onClick={onSkipButton}>
                    Skip
                </div>
                <div className="button__card">
                    Reset
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cards: state.cardsReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        init: () => dispatch(init()),
        nextPlayer: () => dispatch(nextPlayer()),
        giveCard: () => dispatch(giveCard())
    }
}

export default  connect(mapStateToProps, mapDispatchToProps)(ControlPanel)
