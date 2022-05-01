import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Image/Logo/logo.png';
import './Header.css';
const Header = () => {
    return (
        <div>
            <nav>
                <div className="nav-section">
                    <div className="logo">
                        <img src={logo} height="60px" alt="" />
                    </div>
                    <div className="menu">
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