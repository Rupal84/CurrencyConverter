import React from 'react';

const Currency = (props) => {
    const getOptions = (options) => {
        return options.map((option) => {
           return <option key={option} value={option} >{option}</option>
        })
    }
    return (
        <div className="form-group">
        <label htmlFor={props.id} >{props.label}</label >
        <select 
          id={props.id}
          onChange={(e) => props.handleChange(e)}
          className="form-control"
          name={props.name}
        >
          {getOptions(props.options)}
        </select>
        </div>
    )
}
Currency.defaultProps = {
    options: ['AUD', 'CAD', 'CNY', 'CZK', 'DKK', 'EUR', 'GBP', 'JPY', 'NOK', 'NZD', 'USD']
}

export default Currency;
