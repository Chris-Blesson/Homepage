import React from 'react';
import './Navbar.styles.css';

const Navbar = () => {
    return (
        <ul className="navbar">
            <li className="nav-link nav-link-ltr"><a href="#task-section">Tasks</a></li>
            <li className="nav-link nav-link-ltr"><a href="#">Community</a></li>
            <li className="nav-link nav-link-ltr"><a href="#">Activity</a></li>
            <li className="nav-link nav-link-ltr"><a href="#">Contact</a></li>
        </ul>
    )
}

export default Navbar;