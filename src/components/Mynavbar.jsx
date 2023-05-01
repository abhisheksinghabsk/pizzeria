import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { Link } from "react-router-dom";
import Logo from "../assets/pngtree-pizza-logo-png-image_6147023.png";

const Mynavbar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-dark text-white">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          <img src={Logo} alt="img" />
        </Link>
        <button
          className="navbar-toggler text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon bg-white"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active text-white" aria-current="page" to="" >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="menu">
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Mynavbar;
