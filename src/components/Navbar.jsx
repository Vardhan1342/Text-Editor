import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    
      <nav className={`navbar navbar-${props.mode} bg-${props.mode} navbar-expand-lg `}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">Aboutus</Link>
        </li>
      </ul>
      <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light' }`}>
          <a style={{cursor:"pointer",border:0}} onClick={props.changeMode} ><i class="fa-solid fa-sun"></i></a>
      </div>
    </div>
  </div>
</nav>
    
  );
}
