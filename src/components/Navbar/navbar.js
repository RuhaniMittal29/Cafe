import React, { useState } from "react";
import './navbar.css';
import { Link } from 'react-scroll';
import coffeeLogo from "../../assets/coffeeLogo.png";
import menu from "../../assets/menu.png";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className="navbar">
            <span className="title">Brewful Bliss Cáfe</span>
            <div className="desktopMenu">
                <Link activeClass="active" to="home" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
                <Link activeClass="active" to="coffee" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Coffee</Link>
                <Link activeClass="active" to="dessert" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Dessert</Link>
            </div>
            <img src={coffeeLogo} alt="coffeeLogo" className="coffeeLogo" />

            <img src={menu} alt="Menu" className="mobMenu"  onClick={()=>setShowMenu(!showMenu)}/>
            <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
                <Link activeClass="active" to="home" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
                <Link activeClass="active" to="coffee" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Coffee</Link>
                <Link activeClass="active" to="dessert" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Dessert</Link>
            </div>
        </nav>
    )
}

export default Navbar;