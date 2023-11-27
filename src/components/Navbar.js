import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from './logoImage.jpg';
import darkModelogo from './darkModelogo.jpg';


// export class Navbar extends Component {
const Navbar=(props)=>{
  const { mode,toggleMode } = props;
  // render() {
    
    return (
      <nav className={`navbar navbar-expand-lg fixed-top navbar-${mode} bg-${mode} shadow`} style={{ backgroundColor: mode === 'light' ? '#B2BEB5' : '' }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><img src={mode==='light'?logoImage:darkModelogo} alt="NewsPaws Logo" height={'30px'} width={'39px'}/> NewsPaws</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Business">Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Entertainment">Entertainment</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/General">General</Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="/Health">Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Science">Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Sports">Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Technology">Technology</Link>  
              </li>
            </ul>
            <div className={`form-check form-switch text-${mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={() => toggleMode(null)} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Switch Mode</label>
          </div>
          </div>
        </div>
      </nav>
    );
  // }
}

export default Navbar;


// import React, { Component } from 'react'
// import {Link} from 'react-router-dom';

// export class Navbar extends Component {

//   render() {
//     const { navigation } = this.props;
//     return (
//       <div>
        
//             <nav className={`navbar navbar-expand-lg fixed-top navbar-${mode} bg-${mode} shadow`} style={{ backgroundColor: mode === 'light' ? '#B2BEB5' : '' }}>
//             <div className="container-fluid" >
//                 <Link className="navbar-brand" to="/">NewsMonkey</Link>
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                     <li className="nav-item">
//                     <Link className="nav-link " aria-current="page" to="/">Home</Link>
//                     </li>
//                     <li className="nav-item">
//                     <Link className="nav-link" to="/Business">Business</Link>
//                     </li>
//                     <li className="nav-item">
//                     <Link className="nav-link" to="/Entertainment">Entertainment</Link>
//                     </li>
//                     <li className="nav-item">
//                     <Link className="nav-link" to="/General">General</Link>
//                     </li>
//                     <li className="nav-item">
//                     <Link className="nav-link" to="/Health">Health</Link>
//                     </li>
//                     <li className="nav-item">
//                     <Link className="nav-link" to="/Science">Science</Link>
//                     </li>
//                     <li className="nav-item">
//                     <Link className="nav-link" to="/Sports">Sports</Link>
//                     </li>
//                     <li className="nav-item">
//                     <Link className="nav-link" to="/Technology">Technology</Link>
//                     </li>
//                     </ul>
                   
//                 </div>
//                 <div className={`form-check form-switch text-${mode==='light' ? 'dark':'light'}`}>
//                   <input className="form-check-input" onClick={()=>this.props.toggleMode(null)} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
//                   <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle Mode</label>
//                 </div>
//             </div>
//             </nav>
        
//       </div>
//     )
//   }
// }

// export default Navbar
