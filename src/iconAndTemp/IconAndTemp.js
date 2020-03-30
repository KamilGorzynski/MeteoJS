import React from 'react';
import './IconAndTemp.css';
import { Icon } from './Icon';
import { MainTemp } from './MainTemp';


export class IconAndTemp extends React.Component {

    setCityName(cityName) {
        switch(cityName) {
            case 'Repubblica di San Marino': return 'San Marino'; break;
            case 'Province du Luxembourg': return 'Luxembourg '; break;
            case 'Centar': return 'Zagreb'; break;
            default: return cityName;
        }
    }

    getDate() {
        const date = new Date();
        return date.toLocaleDateString(); 
    }

    render() {
        let main = this.props.weather['main'];
        let weather = this.props.weather['weather'][0]; 
        return (
            <div class="iconAndTemp">
                <Icon weather={weather}/>

                <div className="cityAndDateAndTemp">

                    <div id='error' className="twoHeaders">
                        <h2 id="city">{this.setCityName(this.props.weather['name'])}</h2>
                        <h2 id="date">{this.getDate()}</h2>
                    </div>

                    <MainTemp weather={weather} main={main}/>

                </div>
            </div>
        );  
    }
};


