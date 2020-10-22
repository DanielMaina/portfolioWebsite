import React, { Component } from 'react';

import '../../../src/App.css';
import MoreProjects from '../../components/portfolio/MoreProjects';

import project1 from '../../assets/project1.png';
import project2 from '../../assets/project2.png';
import project3 from '../../assets/project3.png';


class Projects extends Component {
  state = { displayBio : false};

  toggleDisplayBio = () => {
    this.setState({ displayBio : !this.state.displayBio });
  }

  render() {    
  return (
    <div>
      <h2>Highlighted Projects</h2>
      <div className="projects">
            <div className="col-1">
            <h4>React Application</h4>
            <img src={project1} alt='project1' style={{ width: 200, height: 120 }}/>
            <p>A React App that I built, involving JS and core web dev concepts</p>
            <a></a>
          </div>
          <div className="col-2">
            <h4>My API</h4>
            <img src={project2} alt='project2' style={{ width: 200, height: 120 }}/>
            <p>A REST API that I built from scratch with GET and POST requests</p>
            <a></a>
          </div>
          <div className="col-3">
            <h4>Xamarin Application</h4>
            <img src={project3} alt='project3' style={{ width: 200, height: 120 }}/>
            <p>My first functional application using C#</p>
            <a></a>
          </div>       
          </div>
        {
          this.state.displayBio ? (
            <div>              
              <MoreProjects />
              <button className="btn-primary" onClick={this.toggleDisplayBio}>Hide</button>
            </div>
          ) : (
            <div>
              <button className="btn-primary" onClick={this.toggleDisplayBio}>Show more</button>
            </div>
          )
        }
    </div>
    )
  }
}

export default Projects;
