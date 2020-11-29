import React from 'react';
import { connect } from 'react-redux'

const mapDispatchToProps = (dispatch) => {
    return {
        lock: () => dispatch({ type: "LOCK" }),
        unLock: () => dispatch({ type: "UNLOCK" })
    }
}

const toggleLock = ({ text, click, lock, unLock }) => {
    return (<React.Fragment>
        <div onClick={lock}>
            {text}
        </div>
        <div onClick={unLock}>
            {text}
        </div>
    </React.Fragment>
    )
}

export default connect(null, mapDispatchToProps)(toggleLock);