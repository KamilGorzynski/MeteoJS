import React from 'react';

export class TwoHeaders extends React.Component {

    render() {
        const {value1, value2} = this.props.data;
        
        return (
            <div className="twoHeaders">
                <h3>{ value1 }</h3>
                <h3>{ value2 }</h3>
            </div>
        )
    }
};