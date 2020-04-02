import React from 'react';
import './IconAndTemp.css';
import { Icon } from './Icon';
import { MainTemp } from './MainTemp';
import { TwoHeaders } from '../twoHeaders/TwoHeaders';


export class IconAndTemp extends React.Component {

    setCityName(cityName) {
        switch(cityName) {
            case 'Repubblica di San Marino': return 'San Marino'; break;
            case 'Luxembourg Province': return 'Luxembourg '; break;
            case 'Longyearbyen': return 'Longyear- byen'; break;
            case 'Kyiv': return 'Kiev'; break;
            case 'Donji grad': return 'Zagreb'; break;
            default: return cityName;
        }
    }

    getDate() {
        const date = new Date();
        return date.toLocaleDateString(); 
    }

    twoHeadersData() {
        return {
            value1: this.setCityName(this.props.weather['name']),
            value2: this.getDate(),
        }
    } 

    render() {
        let main = this.props.weather['main'];
        let weather = this.props.weather['weather'][0]; 
        return (
            <div className="iconAndTemp">
                <Icon weather={weather}/>

                <div className="cityAndDateAndTemp" >
                    <div style={{fontSize: "1.4rem"}}>
                        <TwoHeaders data={this.twoHeadersData()} />
                    </div>
                    <MainTemp weather={weather} main={main}/>
                </div>
            </div>
        );  
    }
};


