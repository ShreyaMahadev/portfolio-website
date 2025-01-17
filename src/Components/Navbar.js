import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid justify-content-center">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2  mb-lg-0">
              <li className="nav-item px-5">
                <a className="nav-link " aria-current="page" href="#home">Home</a>
              </li>
              <li className="nav-item px-5">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item px-5">
                <a className="nav-link" href="#skills">Skills</a>
              </li>
              <li className="nav-item px-5">
                <a className="nav-link" href="#projects">Projects</a>
              </li>
              <li className="nav-item px-5">
                <a className="nav-link" href="#contact">Contact</a>
              </li>
              {/* Add more nav items here */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;