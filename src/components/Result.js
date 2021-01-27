import React from 'react';

const Result = ({status}) => {
    return (
        <React.Fragment>
            {status.error ?
                <div className="alert alert-danger error" role="alert" data-testid="error">
                    {status.error}
                </div> :
                status.resultLabel && <div className="result" data-testid="result">
                    {status.resultLabel}: {status.result}
                </div>}
        </React.Fragment>
    )
}

export default Result;