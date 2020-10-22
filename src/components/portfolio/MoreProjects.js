import React, { Component } from 'react';
import MOREPROJETS from '../../data/moreprojects';

class MoreProject extends Component {
  render() {
    console.log('this.props', this.props);

    const { title, image, description, link } = this.props.moreproject;

    return(
      <div style={{ display: 'inline-block', width: 300, margin: 10 }}>
        <h3>{title}</h3>
        <img src={image} alt='profile' style={{ width: 200, height: 120 }}/>
        <p>{description}</p>
        <a href={link}>{link}</a>
      </div>
    )
  }
}

class MoreProjects extends Component{
  render() {
    return (
      <div>
        <h2>Other Projects</h2>
        <div>
          {
            MOREPROJETS.map(MOREPROJET => {
              return (
                <MoreProject key={MOREPROJET.id} moreproject={MOREPROJET} />
              );
            })
          }
        </div>
      </div>
    )
  }
}






export default MoreProjects;
