import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Image/Logo/logo.png';
import './Header.css';
const Header = () => {
    const myFunction = () => {
        var x = document.getElementById("menu");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
    return (
        <div>
            <nav>
                <div className="nav-section">
                    <div className="logo">
                        <img src={logo} height="60px" alt="" />
                    </div>
                    <div onClick={myFunction} className="smail-nav">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div id='menu' className="menu">
                        <ul>
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/login'>Login</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;