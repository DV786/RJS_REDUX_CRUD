import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="Navigation">
      <div className="Container">
        <nav className="navbar navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img
                src="https://media-exp1.licdn.com/dms/image/C4E0BAQFN7JAEafcDAg/company-logo_200_200/0/1568023786072?e=2159024400&v=beta&t=Yd8L7xQDTMEI4FW9F2qJYyB_N3d8djM6j3J2PQhzmyE"
                width="30"
                height="30"
                alt=""
              />
            </Link>
            <NavLink className="navbar-brand" to="/">
              AIMS
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link active" to="/">
                    Home
                  </NavLink>
                </li>
              </ul>
            </div>
            <Link className="btn btn-outline-light" to="/addEmploye">
              ADD
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
