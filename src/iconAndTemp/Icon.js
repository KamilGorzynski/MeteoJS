import React from 'react';
import img1 from '../img/01d.png';
import img2 from '../img/02d.png';
import img3 from '../img/03d.png';
import img4 from '../img/04d.png';
import img5 from '../img/09d.png';
import img6 from '../img/10d.png';
import img7 from '../img/11d.png';
import img8 from '../img/13d.png';
import img9 from '../img/50d.png';

export const Icon = ({ weather }) => {

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

    const setIcons = (icon) => {
        return imgMap[icon.replace('n', 'd')];
    }
 
    return (
        <div className="iconDiv">
            <img id="icon" src={setIcons(weather['icon'])}></img>
        </div>
    )
    
};