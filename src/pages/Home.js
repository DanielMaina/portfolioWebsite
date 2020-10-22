import React, { Component } from 'react';
//import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import Projects from '../components/portfolio/Projects';
import SocialProfiles from '../components/contact/SocialProfiles';
import AboutMe from '../components/about/AboutMe';
import Title from '../components/landing/Title';
import Hero from '../components/landing/Hero';
import Banner from '../components/landing/Banner';
//import '../App.scss';

// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
//import { Row, Col } from 'react-bootstrap';
//import ProjectCard from './components/portfolio/ProjectCard';
import PROJETS from '../data/projects';


class Home extends Component {
  render() {
    return (
      <div className="landing">
        <Hero> 
        <Banner
          title="Dan Maina"
        >
        <Title />
        </Banner>  
        </Hero>
        <div className="container">
        <hr />
        <AboutMe />
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
        </div>        
      </div>
    )
  }
}

export default Home;


