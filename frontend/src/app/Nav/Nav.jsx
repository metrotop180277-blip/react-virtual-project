import React from "react";
import { Link } from "react-router";
import './Nav.css'

function Nav() {

  return (
    <>
        <ul className="header-ul">
            <li className="header-nav-list"><Link className="header-nav-link" to={'/home'}>Home</Link></li>
            <li className="header-nav-list"><Link className="header-nav-link" to={'/about'}>About us</Link></li>
            <li className="header-nav-list"><Link className="header-nav-link" to={'/service'}>Service</Link></li>
            <li className="header-nav-list"><Link className="header-nav-link" to={'/error'}>Page</Link></li>
            <li className="header-nav-list"><Link className="header-nav-link" to={'/blog'}>Blog</Link></li>
        </ul>
    </>
  )
}

export default Nav
