import * as React from "react"
import { Link } from "react-router-dom";
import { RxHome, RxPerson } from "react-icons/rx";
import { TbMessageChatbot } from "react-icons/tb";


export default function Navbar() {
  return (
    <nav className="navbar">
      <Link className="navItem" to="/Home"><RxHome/>Home</Link>
      <Link className="navItem" to="/Chatbot"><TbMessageChatbot/>Chatbot</Link>
      <Link className="navItem" to="/Account"><RxPerson/>Account</Link>
    </nav>
  );
}

 
