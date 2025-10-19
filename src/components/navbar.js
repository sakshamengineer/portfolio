import React, { useState } from 'react'
import {Link} from "react-router-dom";

export default function Navbar() {
    const [active , noactive] = useState("");
    function menubar(){
        if (active === ""){
            noactive("active");
        }
        else{
            noactive("");
        }
    }
    return (
        <div className='navbar'>
            <div className="container">
                <h2 className="title-text">Portfolio.</h2>
                <div className= 'mobile-toggle' onClick={menubar}>
                    <div className='hamburger'><i className='bx bx-menu' style={{ color: '#ffffff' }}  ></i></div>
                </div>
                <div className="innernav">
                    <ul className={`nav-links ${active}`}>
                        <li className="nav-item">
                            <Link className="nav-link active" style={{ '--i': 1 }} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" style={{ '--i': 2 }} to="/about">About Me</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" style={{ '--i': 3 }} to="/skills">Skills</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" style={{ '--i': 5 }} to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
