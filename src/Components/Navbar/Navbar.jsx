import React from "react";
import { NavLink } from "react-router-dom";
import "../../App.css";
import "./Navbar.css";
// import logo from "../../Assets/logo_white.png"

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="nav-container">
          <ul className="nav">
            <li className="nav-item">
              <NavLink
                className="nav-link "
                activeClassName="active"
                aria-current="page"
                to="/About"
              >
                {" "}
                <div className="title">About</div>{" "}
                <span className="icon">
                  <ion-icon name="information-circle"></ion-icon>
                </span>{" "}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link "
                activeClassName="active"
                aria-current="page"
                to="/project"
              >
                {" "}
                <div className="title">Projects</div>{" "}
                <span className="icon">
                  <ion-icon name="rocket"></ion-icon>
                </span>{" "}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                aria-current="page"
                to="/"
              >
                <div className="title">Home</div>
                <span className="icon hover">
                  {/* <img loading='lazy' decoding='async' className="logo" src={logo}/> */}
                  {/* <div className="home"> */}
                  <ion-icon name="home"></ion-icon>
                  {/* </div> */}
                </span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                aria-current="page"
                to="/achievements"
              >
                <div className="title achievements">Achievements</div>
                <span className="icon">
                  <ion-icon name="medal"></ion-icon>
                </span>{" "}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link "
                activeClassName="active"
                aria-current="page"
                to="/team"
              >
                <div className="title">Team</div>
                <span className="icon">
                  <ion-icon name="people"></ion-icon>
                </span>{" "}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Navbar;
