import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="doorbell__navbar">
      <h2>The DoorBell</h2>
      <ul>
        <li>
          <Link to="/show">Registered Users</Link>
        </li>
        <li>
          <Link to="/check">Check User</Link>
        </li>
        <li>
          <Link to="/supervise">Manage Supervision</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
