import React from 'react';

import './navbar.css';
import {BsFillPersonFill} from 'react-icons/bs';
import ReactDOM from 'react-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg nav-2">
  <a className="navbar-brand " href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link" href="#">Clubs</a>
      <a className="nav-item nav-link" href="#">Salles</a>
      <a className="nav-item nav-link" href="#">Evènements</a>
      <a className="nav-item nav-link" href="#">Contacts</a>
      <a className="nav-icon nav-item nav-link" href="#"><BsFillPersonFill/></a>
    </div>
  </div>
</nav>
        </div>
    );
}

export default Navbar;
