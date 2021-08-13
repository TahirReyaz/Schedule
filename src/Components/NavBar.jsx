import React from "react";
import {Link} from "react-router-dom";

function NavBar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{height: "7vh"}}>
      
        <div className="container-fluid">
          <Link className="navbar-brand" to ="/"><h2>Schedule</h2></Link> 
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to ="/contact">Contact</Link> 
            </li>
            <li className="nav-item">
              <Link className="nav-link" to ="www.google.com">GitHub</Link> 
            </li>
            <li className="nav-item">
              <Link className="nav-link" to ="/about">About Me</Link> 
            </li>
            <li className="nav-item">
              <Link className="nav-link" to ="www.google.com">More projects</Link> 
            </li>
          </ul>  
        </div>  
        </div>
      </nav>
      );
}

export default NavBar;