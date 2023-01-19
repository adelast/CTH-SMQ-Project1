import React from 'react';
import { NavLink, Link } from "react-router-dom";
import "../styles/Navbar.css"
import Logout from "./Logout";
import Logo from "../images/logo.png";


function Navbar() {
    const List = [
        {
            to: "/",
            link: 'Accueil'
        },
        {
            to: "/processus",
            link: 'Processus'
        },
        {
            to: "/procedures",
            link: 'Procedures'
        },
        {
            
            to: '/analyse_risques',
            link: "Analyse des Risques"
        },
        {
            to: "/tbq",
            link: 'TBQ'
        },
        {
            to: "/enregistrements",
            link: 'Enregistrements'
        },
        {
            to: "/contacts",
            link: 'Contacts'
        }
      ];
  return (
    
      <div className="navbar">
        <Link to=" /" >
          <img src={Logo} alt="Nav Logo" className='logo' />
        </Link>

        <ul className="navbar__menu">
          {List.map((el, idx) => (
            <li className="navbar__item" key={idx}>
              <NavLink
                exact
                to={el.to}
                className={({ isActive }) =>
                  isActive ? "activeStyle" : "navbar__links"
                }
              >
                {el.link}
              </NavLink>
            </li>
          ))}
          <li className="navbar__item">
            <Logout />
          </li>
        </ul>
      </div>
  )
}

export default Navbar