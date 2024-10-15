import React from "react";
import './Navbar.css';


const Navbar= ()=>{
    return (
    <div className="navbar">
        
        <div className="logo">
            <h3>Logo</h3>
        </div>
        <ul className="menu">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
     
     </div>
    )
}
export default Navbar;