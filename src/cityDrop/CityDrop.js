import React, { Component } from 'react';
import {cities} from './cities';

const style= {
    width: "100%",
    height: "3rem",
    margin: "0",
    backgroundColor: "rgba(71, 71, 71, 0.7)",
    color: "white",
    textAlign: "center",
    border: "0",
    fontSize: "1.2rem",
    paddingLeft: "0.1rem",
    transition: "1.2s ease-in-out",
};

const CityDrop = () => {
    return (
        <select className="cityDrop" style={style}>
            { cities.map(cityData => <option value={cityData['capitol']}>{cityData['capitol'] + ', ' + cityData['country']}</option>)}              
        </select>
    );  
};

export default CityDrop;
