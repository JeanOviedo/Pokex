import React from "react";
import Logo from "../logo.png";  
//import Search from "./Search";
//import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <header className="navbar">
      <div> <img id="logo" src={Logo} className="logo" alt="" /></div>
      <nav>
        <ul className="menu">
          <li></li>
          <li> </li>
          <li> </li>
        </ul>
      </nav>
    </header>
  );
}
