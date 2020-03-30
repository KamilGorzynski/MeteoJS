import React from 'react';

export class TwoHeaders extends React.Component {

    render() {
        const {value1, value2} = this.props.data;
        
        return (
            <div className="twoHeaders">
                <h2>{ value1 }</h2>
                <h2>{ value2 }</h2>
            </div>
        )
    }
};