import React from 'react';

const Result = (props) => {
    return (
        <div className="result">
            {props.label}: {props.result}
        </div>
    )
}

export default Result;