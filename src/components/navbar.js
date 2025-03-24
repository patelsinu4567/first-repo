import React from "react";
import { link, navlink } from "react-router-dom";
import "./navbar.css";

function navbar() {
    return(
        <nav>
        <ul>
        <li><link to="/">Home</link></li>
        <li><Navlink to="/about" actionClassName="active">about</Navlink></li>
        <li><Navlink to="/contact" actionClassName="active">contact</Navlink></li>
        </ul>
        </nav>
    );
}
export default Navbar;