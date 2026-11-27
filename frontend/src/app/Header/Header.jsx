import React from "react";
import './Header.css'
import logo from './HeaderIMG/Frame22.png'
import Nav from "../Nav/Nav";

function Header() {
    return (
        <>
            <header>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <nav>
                <Nav />
                </nav>
                <div className="input-wrapper">
                <button className="header-button">Contact us</button>
                </div>
            </header>
        </>
    )
}

export default Header