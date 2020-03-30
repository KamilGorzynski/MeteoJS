import React from 'react';
import {cities} from './cities';
import { IconAndTemp } from '../iconAndTemp/IconAndTemp';
import { AllParams } from '../allParams/AllParams';
import axios from 'axios';

const apiKey = '22eed691def38ddb2f1d5cb0e6532487';

const style= {
    width: "100%",
    height: "10%",
    margin: "0",
    backgroundColor: "rgba(71, 71, 71, 0.7)",
    color: "white",
    textAlign: "center",
    border: "0",
    fontSize: "1.2rem",
    paddingLeft: "0.1rem",
    transition: "1.2s ease-in-out",
};

export class Main extends React.Component {

    constructor() {
        super();
        this.getWeather();
        this.state = {
           weather: []
        };
    }

    getWeather() {
        let chosenCity = document.querySelector(".cityDrop");
        let city = chosenCity ? chosenCity.value : 'Warsaw';
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`)
        .then(res => {
            this.setState({ weather: [res.data] });
          })
    }

    render() {
        return (
            <main>
                <select className="cityDrop" style={style} onChange={() => this.getWeather()}>
                    { cities.map(cityData => <option value={ cityData['capitol'] }>{ cityData['capitol'] + ', ' + cityData['country'] }</option>) }              
                </select>
                
                { this.state.weather.map(obj => <IconAndTemp weather={obj} />) }
                { this.state.weather.map(obj => <AllParams weather={obj} />) }
                
            </main>
        )
    }
}


export default Main;
