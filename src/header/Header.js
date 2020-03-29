import React from 'react';


const style={
    backgroundColor: "rgb(85, 185, 202)",
    borderBottom: "1px solid darkslategray",
    paddingLeft: "1rem"
}

const Header = () => {
    return (
    <header style={style}>
        <h1>MeteoJS</h1>
    </header>
    );  
};

export default Header;
