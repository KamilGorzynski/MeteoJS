import React from 'react';
import './IconAndTemp.css';
import { Icon } from './Icon';
import { MainTemp } from './MainTemp';
import { TwoHeaders } from '../twoHeaders/TwoHeaders';


export const IconAndTemp = ({ weather, weather: {main} }) => {

    const setCityName = (cityName) => {
        switch(cityName) {
            case 'Repubblica di San Marino': return 'San Marino';
            case 'Luxembourg Province': return 'Luxembourg ';
            case 'Longyearbyen': return 'Longyear - byen';
            case 'Kyiv': return 'Kiev';
            case 'Donji grad': return 'Zagreb';
            default: return cityName;
        }
    }

    const getDate = () => {
        const date = new Date();
        return date.toLocaleDateString(); 
    }

    const nestedWeather = weather['weather'][0]; 
    return (
        <div className="iconAndTemp">
            <Icon weather={ nestedWeather }/>

            <div className="cityAndDateAndTemp" >
                <div style={ {fontSize: "1.4rem"} }>
                    <TwoHeaders
                        value1={ setCityName(weather['name']) }
                        value2={ getDate() }
                    />
                </div>
                <MainTemp weather={ nestedWeather } main={main}/>
            </div>
        </div>
    );  
    
};


