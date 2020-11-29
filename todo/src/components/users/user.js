import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        updateUser: () => {
            dispatch({
                "type": "UPDATE_USER",
                "name": "Dani boss"
            })
        }
    }
}

const User = ({ users, updateUser }) => {
    console.log("render users");
    return (
        <div>
            <button onClick={updateUser}>Change name</button>
            {users[0].name}
        </div>
    )
}

var connectedComponent = connect(mapStateToProps, mapDispatchToProps)(User);

export default connectedComponent;

