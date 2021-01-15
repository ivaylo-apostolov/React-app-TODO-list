import React from 'react';
import { connect } from 'react-redux';
import withSing from '../../hoc/withSing'

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
                "name": "Dani is a boss"
            })
        }
    }
}

const User = ({ users, updateUser, sing }) => {
    sing();
    return (
        <div>
            <button onClick={updateUser}>Change user name</button>
            {users[1].name}
        </div>
    )
}

export default withSing(
    connect(mapStateToProps, mapDispatchToProps)(
        User), "I'm singing user")

