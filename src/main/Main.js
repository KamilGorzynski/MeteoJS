import React, { useState, useEffect } from 'react';
import { cities } from './cities';
import { Option } from './Option';
import { IconAndTemp } from '../iconAndTemp/IconAndTemp';
import { AllParams } from '../allParams/AllParams';
import { ServiceInactive } from '../serviceInactive/ServiceInactive';
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

const Main = () => {

    const [weather, setWeather] = useState([]);
    const [capitol, setCapitol] = useState('Warsaw');

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${capitol}&APPID=${apiKey}`)
        .then(res => {
            setWeather([res.data]);
        })   
    }, [capitol]);
    
    return (        
        <main>           
            <select className="cityDrop" style={style} onChange={ e => setCapitol(e.target.value) }>
                { cities.map(cityData => <Option cityData={ cityData } />) }              
            </select>
            
            { weather.length > 0 && [
                    weather.map(obj => <IconAndTemp weather={ obj } />), 
                    weather.map(obj => <AllParams weather={ obj } />)
                ] }
            { weather.length === 0 && <ServiceInactive /> }       
        </main>
    )    
}

export default Main;
