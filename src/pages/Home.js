import React, { Component } from 'react';
//import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import Projects from '../components/portfolio/Projects';
import SocialProfiles from '../components/contact/SocialProfiles';
import MoreProjects from '../components/portfolio/MoreProjects';
import AboutMe from '../components/about/AboutMe';
import Title from '../components/landing/Title';
//import '../App.scss';

// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
//import { Row, Col } from 'react-bootstrap';
//import ProjectCard from './components/portfolio/ProjectCard';
import PROJETS from '../data/projects';


class Home extends Component {
  state = { displayBio : false};

// constructor(){
//   super();
//   this.state = { displayBio: false };
//
//   console.log('Component this', this);
//
//   this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
// }

  toggleDisplayBio = () => {
    this.setState({ displayBio : !this.state.displayBio });
  }

  render() {
    return (
      <div className="container">        
        <h1>Portfolio</h1>
        <p>My name is Dan. I'm a software developer,</p>
        <Title />
        <hr />
        <AboutMe />
        <hr />
        <Projects />
        <hr />
        <MoreProjects />
        <hr />
        <SocialProfiles />
      </div>
    )
  }
}

export default Home;


