import React from 'react';
import './App.css';
import {NavBar} from "./components/NavBar";
import {HomeAbout} from "./components/HomeAbout";
import {HomeRecent} from "./components/HomeRecent";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>

      <div id="hanz-home-about-pre" className="container"></div>

      <HomeAbout></HomeAbout>

      <div id="hanz-home-about-pre" className="container"></div>

      <HomeRecent></HomeRecent>
    </div>
  );
}

export default App;
