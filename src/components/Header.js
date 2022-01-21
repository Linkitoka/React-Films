import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <nav>
                <ul>
                    <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}><li>Accueil</li></NavLink>
                    <NavLink to="/coups-de-coeur" className={(nav) => (nav.isActive ? "nav-active" : "")}><li>Coup de coeur</li></NavLink>
                </ul>
            </nav>
            <h1>React Film</h1>
        </div>
    );
};

export default Header;