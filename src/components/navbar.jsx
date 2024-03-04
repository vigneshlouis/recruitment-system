import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faUserPlus, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#e3f2fd",display:"sticky" }}>
      <div className="container">
        
       
          <Link to="/home" className="navbar-brand">
          Recruitment System Logo</Link>
       
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <FontAwesomeIcon icon={faBars} />
          </span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              
                <Link to="/home"  className="nav-link active">
                <FontAwesomeIcon icon={faHome} /> Home
                </Link>
              
            </li>
            <li className="nav-item">
            <Link to="/Registration"  className="nav-link active">
                <FontAwesomeIcon icon={faUserPlus} />Register
                </Link>
            </li>
            <li className="nav-item">
            <Link to="/login"  className="nav-link active">
                <FontAwesomeIcon icon={faSignInAlt} /> Login
                </Link>
            </li>
            
          </ul>
        </div>
        </div>
   
    </nav>
  );
}

export default NavBar;
