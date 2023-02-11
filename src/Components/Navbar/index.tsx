import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul className="nav-links">
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/check">Check</Link>
        </li>
        <li>
          <Link to="/show">Show</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
