import React from 'react';

const InputText = (props) => {
    return (
        <div className="form-group">
        <label htmlFor={`input-${props.id}`} className="form-label">{props.label}</label>
        <input type='number' name={`input-${props.name}`} id={`input-${props.id}`} className="form-control" onChange={(e)=> props.onChange(e.target.value)}/>
        </div>
    )
}

export default InputText;