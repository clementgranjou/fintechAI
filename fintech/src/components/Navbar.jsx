import * as React from "react";
import { Link } from "react-router-dom";
import { HiOutlineUserCircle, HiOutlineChatAlt, HiOutlineHome } from "react-icons/hi";


export default function Navbar() {
  return (
    <nav className="navbar">
      <Link className="navItem" to="/">
        <HiOutlineHome className="navbaricon" />
      </Link>
      <Link className="navItem" to="/Chatbot">
        <HiOutlineChatAlt className="navbaricon" />
      </Link>
      <Link className="navItem" to="/Account">
        <HiOutlineUserCircle className="navbaricon" />
      </Link>
    </nav>
  );
}
