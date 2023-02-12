import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="doorbell__navbar">
      <h2>The DoorBell</h2>
      <ul>
        <li>
          <Link to="/show">Registered Fingers</Link>
        </li>
        <li>
          <Link to="/register">Register A Finger</Link>
        </li>
        <li>
          <Link to="/check">Manage Supervision</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
