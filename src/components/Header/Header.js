import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <NavLink className="nav-links"
                to="/home"
                activeStyle={{
                    fontWeight: "bold",
                    color: "red",
                    textDecoration: 'underline'
                }}
            >
                Home
            </NavLink>
            <NavLink className="nav-links"
                to="/meals"
                activeStyle={{
                    fontWeight: "bold",
                    color: "red",
                    textDecoration: 'underline'
                }}
            >
                Meals
            </NavLink>
            <NavLink className="nav-links"
                to="/about"
                activeStyle={{
                    fontWeight: "bold",
                    color: "red",
                    textDecoration: 'underline'
                }}
            >
                About
            </NavLink>
        </div>
    );
};

export default Header;