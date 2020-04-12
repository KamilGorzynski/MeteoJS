import React from 'react';


export const Option = ({ cityData: {capitol}, cityData: {country} }) => {
    return (
        <option value={ capitol }>
            { capitol + ', ' + country }
        </option>
    );  
};
