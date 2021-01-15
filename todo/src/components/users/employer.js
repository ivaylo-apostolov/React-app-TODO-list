import React from 'react';
import { connect } from 'react-redux';
import withSing from '../../hoc/withSing';

const mapStateToProps = (state) => {
    return {
        employer: state.employers
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        updateEmployer: () => {
            dispatch({
                "type": "UPDATE_EMPLOYER",
                "name": "Softserve2"
            })
        }
    }
}

const Employer = ({ employer, updateEmployer, sing }) => {
    sing();
    return (
        <div>
            <button onClick={updateEmployer}>Change employer name</button>
            {employer[1].name}
        </div>
    )
}

export default withSing(
    connect(mapStateToProps, mapDispatchToProps)(
        Employer), "I'm singing employer")

