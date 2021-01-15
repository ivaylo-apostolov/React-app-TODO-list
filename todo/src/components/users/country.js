import React from 'react';
import { connect } from 'react-redux';
import { updateCountry } from '../../redux/actions/actions';
import withSing from '../../hoc/withSing';

const mapStateToProps = (state) => {
    return {
        countries: state.countries
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateCountry: () => {
            dispatch(updateCountry())
        }
    }
}
const Country = ({ updateCountry, countries, sing}) => {
    sing();
    return (
        <div>
            <button onClick={updateCountry}>Change country name</button>
            {countries[1].name}
        </div>
    )
}

export default withSing(
    connect(mapStateToProps, mapDispatchToProps)(
        Country), "I'm singing country")