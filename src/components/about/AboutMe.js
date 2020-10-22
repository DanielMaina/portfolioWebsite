import React, { Component } from 'react';

import '../../../src/App.css';

import profile from '../../assets/profile.jpg';

export default class AboutMe extends Component {
  render() {
    return (
      <div>
      <img src={profile} alt='profile' className='profile' />  
      <p className="p-sp">I'm always looking to learn new tools for programming</p>
      <a href="/history" className="btn-primary">History</a>
      </div>
    )
  }
}
