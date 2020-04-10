import React from 'react';
import { TwoHeaders } from '../twoHeaders/TwoHeaders';

const allParamsStyle = {
    display: "block"
}

const otherParamsStyle = {
    textAlign: "center",
    letterSpacing: "0.1rem",
    padding: "0 3rem"
}

export const AllParams = ({ weather, weather: {main} }) => {  
    return (
        <div className="allParams" style={ allParamsStyle } >
            <div className="otherParams" style={ otherParamsStyle }>  
                <TwoHeaders
                    value1={ `Visibility: ${weather['visibility']} m` }
                    value2={ `Pressure: ${main['pressure']} hPa` }
                />
                <TwoHeaders
                    value1={ `Humidity: ${main['humidity']}%` }
                    value2={ `Wind speed: ${weather['wind']['speed']} m/s` }
                />                 
            </div>   
        </div> 
    )
};
