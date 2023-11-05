import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        {/* <Link to="/faqs">FAQs</Link> */}
      </div>
    </div>
  );
};

export default Navbar;
