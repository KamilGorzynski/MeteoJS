import React from 'react';
import './IconAndTemp.css';
import img1 from '../img/01d.png';
import img2 from '../img/02d.png';
import img3 from '../img/03d.png';
import img4 from '../img/04d.png';
import img5 from '../img/09d.png';
import img6 from '../img/10d.png';
import img7 from '../img/11d.png';
import img8 from '../img/13d.png';
import img9 from '../img/50d.png';


const imgMap = {
    "01d": img1,
    "02d": img2,
    "03d": img3,
    "04d": img4,
    "09d": img5,
    "10d": img6,
    "11d": img7,
    "13d": img8,
    "50d": img9,
}


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

    setIcons(icon){
        return imgMap[icon.replace('n', 'd')];
    }

    render() {
        let main = this.props.weather['main'];
        let weather = this.props.weather['weather'][0]; 
        return (
            <div class="iconAndTemp">
                <div className="iconDiv">
                <img id="icon" src={this.setIcons(weather['icon'])}></img>
                </div>

                <div className="cityAndDateAndTemp">

                    <div id='error' className="twoHeaders">
                        <h2 id="city">{this.setCityName(this.props.weather['name'])}</h2>
                        <h2 id="date">{this.getDate()}</h2>
                    </div>

                    <div className="mainTemp">
                        <h2 id="Temp">{(main['temp'] - 273).toFixed(1) + '°C'}</h2>
                        <span id="feelTemp">{`Feels like: ${(main['feels_like'] - 273).toFixed(1)}°C`}</span>
                        <h3 id="description">{weather['description']}</h3>
                    </div>
                    
                </div>
            </div>
        );  
    }
};


