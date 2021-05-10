import React from 'react';
import './Header.styles.css';
import Navbar from './Navbar';
const Header = () => {
    return (
        <div className="header">
            <div className="header-logo">
                <div className="left-bicep">
                    <img width="35" height="40" src="https://www.flaticon.com/svg/vstatic/svg/639/639284.svg?token=exp=1620405712~hmac=23d133ac19824166a1c12bffe66f0277" alt="Muscles free icon" title="Muscles free icon" className="loaded"></img>
                </div>
                <p className="product-title">
                    Self Care
                </p>
                <div className="right-bicep">
                    <img width="35" height="40" src="https://www.flaticon.com/svg/vstatic/svg/639/639284.svg?token=exp=1620405712~hmac=23d133ac19824166a1c12bffe66f0277" alt="Muscles free icon" title="Muscles free icon" className="loaded"></img>
                </div>
            </div>
            <div className="nav-section">
                <Navbar />
            </div>
        </div>
    )
}

export default Header;