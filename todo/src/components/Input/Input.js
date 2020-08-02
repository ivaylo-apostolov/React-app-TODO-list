import React from 'react';

const inputText = (props) => {
    return (
        <div className = 'inputText'>
            <label>{props.labelText}
            <input type = 'text' onChange = {props.changed}/>
            </label>
        </div>

    )
}

export default inputText;