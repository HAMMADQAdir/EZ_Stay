import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import ezstay from './ezstay.jpg'
// import {ezstayLogo} from "./logos/ezstay.jpeg"; // Import the image
export default function Header() {
  return (
    <div className="sticky-header">
      <nav
        className="navbar navbar-expand-lg "
        style={{ backgroundColor: "#BCF4F5" }}>
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <img src={ezstay} alt="EzStay Logo" style={{ height: "50px", width: "auto", marginRight: "10px" ,objectFit:'cover'}} />
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link "
                  style={({ isActive, isTransitioning }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "black" : "#77867F",
                      viewTransitionName: isTransitioning ? "slide" : "",
                    };
                  }}
                  aria-current="page"
                  to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  style={({ isActive, isTransitioning }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "black" : "#77867F",
                      viewTransitionName: isTransitioning ? "slide" : "",
                    };
                  }}
                  to="/contactus">
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  style={({ isActive, isTransitioning }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "black" : "#77867F",
                      viewTransitionName: isTransitioning ? "slide" : "",
                    };
                  }}
                  to="/properties">
                  Properties
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  style={({ isActive, isTransitioning }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "black" : "#77867F",
                      viewTransitionName: isTransitioning ? "slide" : "",
                    };
                  }}
                  to="/reviews">
                  Reviews
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  style={({ isActive, isTransitioning }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "black" : "#77867F",
                      viewTransitionName: isTransitioning ? "slide" : "",
                    };
                  }}
                  to="/login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  style={({ isActive, isTransitioning }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "black" : "#77867F",
                      viewTransitionName: isTransitioning ? "slide" : "",
                    };
                  }}
                  to="/signup">
                  Signup
                </NavLink>
              </li>
            </ul>

            {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}

            {/* <img src=''alt="EZStay Logo" /> Use the imported image */}
            <p>EzStay</p>
          </div>
        </div>
      </nav>
    </div>
  );
}
