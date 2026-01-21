import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assest/logo.jpeg";

const Navbar = () => {
  const reloadPage = () => {  // a arrow function to reload the page
    window.location.reload(); // same as Ctrl + R
  };

  return (
    <div className="navbar">
      <h1 onClick={reloadPage} className="logo">
        Roxco
      </h1>
      <img src={logo} alt="" style={{ height: "4vh", width: "4vh" }} />
      <Link to="/Components">
          <button>Components</button>
      </Link>
      <Link to="/Docs">
          <button>Docs</button>
      </Link>
      
    </div>
  );
};

export default Navbar;
