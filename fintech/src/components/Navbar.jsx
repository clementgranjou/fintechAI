import * as React from "react"
import { Link } from "react-router-dom";
import { HiBolt, HiChatBubbleLeftRight, HiHome } from "react-icons/hi2";


export default function Navbar() {
  return (
    <nav className="navbar">
      <Link className="navItem" to="/Home"><HiHome className="navbaricon"/>
</Link>
      <Link className="navItem" to="/Chatbot"><HiChatBubbleLeftRight className="navbaricon"/></Link>
      <Link className="navItem" to="/Account"><HiBolt className="navbaricon"/></Link>
    </nav>
  );
}

 
