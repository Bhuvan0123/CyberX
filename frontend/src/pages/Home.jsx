import React from 'react'
import "../styles/Homestyle.css"
import aidetect from "../components/aidetect.jpg"
import loganalyze from "../components/log analyzer.png"
import ipfind from "../components/ip find.jpg"
function Home() {
    
  return (
    <div className='home-container'>
        <h1>Welcome to CyberX</h1>
        <h3>Explore our tools...</h3>
        <div className="tools">
          <div className="tool-card">
            <div className="tool-image">
              <img src={aidetect} alt="Image Detect" />
            </div>
            <div className="tool-content">
              <h2>Image Detect</h2>
              <p>Detects if the uploaded image is AI generated or not</p>
              <a className="launchbutton" href='/imagedetect'>Launch</a>
            </div>
          </div>
        </div>
        <div className="tools">
          <div className="tool-card">
            <div className="tool-image">
              <img src={loganalyze} alt="Log Parser" />
            </div>
            <div className="tool-content">
              <h2>Log Parser</h2>
              <p>Helps to given log file and generate a graphical report</p>
              <a className="launchbutton" href='/imagedetect'>Launch</a>
            </div>
          </div>
        </div>
        <div className="tools">
          <div className="tool-card">
            <div className="tool-image">
              <img src={ipfind} alt="IP Find" />
            </div>
            <div className="tool-content">
              <h2>IP Find</h2>
              <p>Helps to find the Locaation of the given IP address</p>
              <a className="launchbutton" href='/imagedetect'>Launch</a>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Home