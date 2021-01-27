import React from 'react';

const Result = (props) => {
    return (
        <React.Fragment>
            {props.error ?
                <div className="alert alert-danger error" role="alert">
                    {props.error}
                </div> :
                props.label && <div className="result">
                    {props.label}: {props.result}
                </div>}
        </React.Fragment>
    )
}

export default Result;