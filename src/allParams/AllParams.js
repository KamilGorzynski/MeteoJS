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

export const AllParams = (props) => {

    const getWeather = () => {
        return props['weather'];
    }

    const getMain = () => {
        return getWeather()['main'];
    }

    const visibilityAndPressureData = () => {
        return {
            value1: `Visibility: ${getWeather()['visibility']} m`,
            value2: `Pressure: ${getMain()['pressure']} hPa`,
        }
    } 

    const humidityAndWindSpeedData = () => {
        return {
            value1: `Humidity: ${getMain()['humidity']}%`,
            value2: `Wind speed: ${getWeather()['wind']['speed']} m/s`,
        }
    } 
  
    return (
        <div className="allParams" style={ allParamsStyle } >
            <div className="otherParams" style={ otherParamsStyle }>
                <TwoHeaders data={ visibilityAndPressureData() } />  
                <TwoHeaders data={ humidityAndWindSpeedData() } />                   
            </div>   
        </div> 
    )
};
