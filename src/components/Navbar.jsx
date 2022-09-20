import React from 'react';
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
           JOB PROTAL
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to='/home'>
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link">
                  Jobs
                </Link>
              </li>
              <li class="nav-item">
              <Link class="nav-link" to='/postjob'>
                 Post Jobs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        </div>
    );
}

export default Navbar;
