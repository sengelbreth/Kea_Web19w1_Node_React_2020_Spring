import React from 'react';
import './App.css';
import LightSwitch from './components/LightSwitch';
import BoredWidget from './components/BoredWidget';
import IsAuthorizedHOC from './components/IsAuthorizedHOC';

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <LightSwitch myProp={123} myFunction={() => console.log("my function called")} />
      <BoredWidget />
    </div>
  );
}

export default IsAuthorizedHOC(App);
