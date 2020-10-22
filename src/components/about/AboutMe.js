import React, { Component } from 'react';

import '../../../src/App.css';

import profile from '../../assets/profile.jpg';

class AboutMe extends Component {
  state = { displayBio : false};

  toggleDisplayBio = () => {
    this.setState({ displayBio : !this.state.displayBio });
  }

  render() {
    return (
      <div>
      <img src={profile} alt='profile' className='profile' />  
      <p>I'm always looking to learn new tools for programming</p>
        {
          this.state.displayBio ? (
            <div>
              <p>I live in Ontario, I code or read everyday</p>
              <p>My favorite language is Javascript, I think React.js is awsome</p>
              <p>Besides coding, I also love basketball and hip hop</p>
              <button onClick={this.toggleDisplayBio}>Show less</button>
            </div>
          ) : (
            <div>
              <button onClick={this.toggleDisplayBio}>Read more</button>
            </div>
          )
        }
      </div>
    )
  }
}

export default AboutMe;
