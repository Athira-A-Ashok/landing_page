import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar-main">
      <div className="top-bar">
        <span>Alba Helpline: 04829 222776</span>
        <ul>
          <li>
            <Link className="menu">Register</Link>
          </li>
          <li>
            <Link className="menu">Login</Link>
          </li>
        </ul>
      </div>
      <nav>
        <input id="nav-toggle" type="checkbox" />

        <h2 className="logo">Logo</h2>
        <ul>
          <li>
            <Link className="menu">HOME</Link>
          </li>
          <li>
            <Link className="menu">
              MEN<ion-icon name="caret-down-outline"></ion-icon>
            </Link>
          </li>
          <li>
            <Link className="menu">
              WOMEN<ion-icon name="caret-down-outline"></ion-icon>
            </Link>
          </li>
          <li>
            <Link className="menu">
              GIRLS<ion-icon name="caret-down-outline"></ion-icon>
            </Link>
          </li>
          <li>
            <Link className="menu">
              BOYS<ion-icon name="caret-down-outline"></ion-icon>
            </Link>
          </li>
        </ul>
        <div className="icon">
          <ion-icon name="search-outline"></ion-icon>
          <ion-icon name="cart-outline"></ion-icon>
        </div>
        <label htmlFor="nav-toggle" class="icon-burger">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </label>
      </nav>
    </div>
  );
}

export default Navbar;
