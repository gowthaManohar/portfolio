// Example in Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import Header from "../Header"
import "./index.css"


const Home= () => {
  return (
    <div className="landing-page">
      <Header/>
      <div className="for">FOR</div>
      <div className="perfection">PERFECTION</div>
      <div className="pixel">PIXEL</div>
      <div className="passion">PASSION</div>
      <div className="uma-maheshara-rao">UMA MAHESHARA RAO</div>
      <img className="component-11-icon" alt="" src="/component-11@2x.png" />
      <div className="component-4">
        <div className="in-wrapper">
          <div className="in">in</div>
        </div>
      </div>
      <img className="component-3-icon" alt="" src="/component-3@2x.png" />
      <img
        className="ant-designinstagram-outlined-icon"
        alt=""
        src="/antdesigninstagramoutlined@2x.png"
      />
      <div className="located-in-the-india-parent">
        <div className="located-in-the-container">
          <p className="located">Located</p>
          <p className="located">in the</p>
          <p className="located">INDIA</p>
        </div>
        <div className="frame-child" />
        <img className="tablerworld-icon" alt="" src="/tablerworld@2x.png" />
      </div>
      
      <div className="new-page" />
    </div>
  );
};

export default Home;
