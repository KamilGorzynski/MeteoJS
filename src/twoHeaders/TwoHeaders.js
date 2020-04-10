import React from 'react';

export const TwoHeaders = ({ value1, value2 }) => {
    return (
        <div className="twoHeaders">
            <h3>{ value1 }</h3>
            <h3>{ value2 }</h3>
        </div>
    )
};