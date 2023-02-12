import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul className="nav-links">
        <li>
          <Link to="/show">Registered Fingers</Link>
        </li>
        <li>
          <Link to="/register">Register A Finger</Link>
        </li>
        <li>
          <Link to="/check">Current Supervise Status</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
