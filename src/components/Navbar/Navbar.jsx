import React from "react";
import Toggle from "../Toggle/Toggle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Navbar.css";
import { Link } from "react-scroll";
const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">Livithasri</div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
            <a href="/">
              Home
              </a> 
            </li>
            {/* <li>
              <a href="/experience">
              Experience
              </a>
            </li> */}
            <li>
            <a href="/works">
            Technologies
              </a>
            </li>
            <li>
            <a href="/portfolio">
            Portfolio
              </a>
              </li>
              <li>
              <a href="/contact">
              Contact
              </a>
            </li>
          </ul>
        </div>
       
      </div>
    </div>
  );
};

export default navbar;
