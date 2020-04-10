import React from 'react';

export const MainTemp = ({ weather, main }) => {    
    return (
        <div className="mainTemp">
            <h2 id="Temp">{(main['temp'] - 273).toFixed(1) + '°C'}</h2>
            <span id="feelTemp">{`Feels like: ${(main['feels_like'] - 273).toFixed(1)}°C`}</span>
            <h3 id="description">{weather['description']}</h3>
        </div>
    )
};