import React, { Component } from 'react';
import './LandingPage.css';
const apiURL = process.env.REACT_APP_API_URL;
const webURL = process.env.REACT_APP_WEB_URL;

class LandingPage extends Component {
  handleSubmit = () => {
      window.location.replace(apiURL + "/auth/spotify")
  }
  render() {
    return (
      <div id='landing-page'>
        <a id='title' className='animated fadeInDown' href="/"><span id='titleLeft'>Nu</span></a>
        <div id='callToAction'>
          <p id="actionText" className='animated fadeInLeft'>You're <span className='highlight'>one</span> step away from
            <span role='img' aria-label='Fire' id='fire'>
              <span id='fire1' className='animated lightSpeedIn' role='img' aria-label='Fire'>🔥</span>
              <span id='fire2' className='animated lightSpeedIn' role='img' aria-label='Fire'>🔥</span>
              <span id='fire3' className='animated lightSpeedIn' role='img' aria-label='Fire'>🔥</span>
            </span>
          </p>
          <button type='button' id='spotifyButton' className='animated fadeInRight' onClick={this.handleSubmit}>
            Connect to Spotify
          <img src="./spotify.png" id="spotifyLogo" alt="spotify logo"></img>
          </button>
        </div>
      </div>
    );
  }
}

export default LandingPage;
