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

export class AllParams extends React.Component {

    getWeather() {
        return this.props.weather;
    }

    getMain() {
        return this.getWeather()['main'];
    }
    

    visibilityAndPressureData() {
        return {
            value1: `Visibility: ${this.getWeather()['visibility']} m`,
            value2: `Pressure: ${this.getMain()['pressure']} hPa`,
        }
    } 

    humidityAndWindSpeedData() {
        return {
            value1: `Humidity: ${this.getMain()['humidity']}%`,
            value2: `Wind speed: ${this.getWeather()['wind']['speed']} m/s`,
        }
    } 

    render() {   
        return (
            <div class="allParams" style={ allParamsStyle } >
                <div class="otherParams" style={ otherParamsStyle }>
                    <TwoHeaders data={this.visibilityAndPressureData()} />  
                    <TwoHeaders data={this.humidityAndWindSpeedData()} />                   
                </div>   
            </div> 
        )
    }
};