import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        employer: state.users[0].employer
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        updateEmployer: () => {
            dispatch({
                "type": "UPDATE_EMPLOYER",
                "name": "Coursera"
            })
        }
    }
}

const Employer = ({ employer, updateEmployer }) => {
    console.log("render employer")
    return (
        <div>
            <button onClick={updateEmployer}>Change name</button>
            {employer.name}
        </div>
    )
}

var connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Employer);

export default connectedComponent;

