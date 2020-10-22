// import React, { Component } from 'react';
// import MOREPROJETS from '../../data/moreprojects';

// class MoreProject extends Component {
//   render() {
//     console.log('this.props', this.props);

//     const { title, image, description, link } = this.props.moreproject;

//     return(
//       <div style={{ display: 'inline-block', width: 300, margin: 10 }}>
//         <h3>{title}</h3>
//         <img src={image} alt='profile' style={{ width: 200, height: 120 }}/>
//         <p>{description}</p>
//         <a href={link}>{link}</a>
//       </div>
//     )
//   }
// }

// class MoreProjects extends Component{
//   render() {
//     return (
//       <div>
//         <h2>Other Projects</h2>
//         <div>
//           {
//             MOREPROJETS.map(MOREPROJET => {
//               return (
//                 <MoreProject key={MOREPROJET.id} moreproject={MOREPROJET} />
//               );
//             })
//           }
//         </div>
//       </div>
//     )
//   }
// }






// export default MoreProjects;




import React, { Component } from 'react';

import '../../../src/App.css';

import project4 from '../../assets/project4.jpg';
import project5 from '../../assets/project5.png';
import project6 from '../../assets/project6.jpg';

class MoreProjects extends Component {
  render() {
    return (
      <div className="moreprojects">
            <div className="col-1">
            <h4>Instagram Bot</h4>
            <img src={project4} alt='project1' style={{ width: 200, height: 120 }}/>
            <p>A python bot to check unfollows</p>
            <a></a>
          </div>
          <div className="col-2">
            <h4>.Net Application</h4>
            <img src={project5} alt='project2' style={{ width: 200, height: 120 }}/>
            <p>Business software for maintaining inventory and customers</p>
            <a></a>
          </div>
          <div className="col-3">
            <h4>.Net software</h4>
            <img src={project6} alt='project3' style={{ width: 200, height: 120 }}/>
            <p>Software for a camp to manage their staff and camp goers</p>
            <a></a>
          </div>       
          </div>
    )
  }
}


export default MoreProjects;
