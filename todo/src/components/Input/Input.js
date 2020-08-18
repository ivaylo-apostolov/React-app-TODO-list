import React from 'react';

const InputText = (props) => {
    return (
        <div className = 'inputText'>
            <label>{props.labelText}
            <input type = 'text' onChange = {props.changed}/>
            </label>
        </div>

    )
}

export default InputText;