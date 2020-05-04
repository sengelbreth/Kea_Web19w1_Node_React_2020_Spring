import React, { useState } from 'react';

function LightSwitch(props) {
    const [light, changeLight] = useState("OFF");

    // console.log(props.myFunction());

    function toggleLightSwitch() {
        light === 'OFF' ? changeLight('ON') : changeLight('OFF');
    }
    
    return (
        <>
            <h1>The light is currently {light}</h1>
            <button style={{ backgroundColor: light === 'OFF' ? 'white' : 'yellow' }} onClick={toggleLightSwitch}>Toggle</button>
        </>
    );
}

export default LightSwitch;