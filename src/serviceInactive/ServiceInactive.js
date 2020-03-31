import React from 'react';
import img from '../img/report.png';


const style= {
    textAlign: "center",
    marginTop: "2rem"
}

const imgStyle = {
    width: "180px",
    height: "180px"
}

export const ServiceInactive = () => {
    return (
        <div style={style}>
            <h2>Sorry, service temporarily inactive</h2>
            <img id="icon" style={ imgStyle } src={ img }></img>
        </div>
    );  
};

