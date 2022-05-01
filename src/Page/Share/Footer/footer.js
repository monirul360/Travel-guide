import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
    return (
        <div>
            <footer>
                <section>
                    <div className="footer-container">
                        <div className="footer-flex">
                            <div className='footer-contact'>
                                <h2>CONTACT US </h2>
                                <p>123 Second Street Fifth</p>
                                <p>Avenue,</p>
                                <p>Manhattan, New York</p>
                                <p>+987 654 3210</p>
                            </div>
                            <div className='footer-links'>
                                <h2>ADDITIONAL LINKS</h2>
                                <ul>
                                    <li><Link to='/'>About us</Link></li>
                                    <li><Link to='/'>Terms and conditions</Link></li>
                                    <li><Link to='/'>Privacy policy</Link></li>
                                    <li><Link to='/'>News</Link></li>
                                    <li><Link to='/'>Contact us</Link></li>
                                </ul>
                            </div>
                            <div className='footer-contact'>
                                <h2>CONTACT</h2>
                                <div className="footer-from">
                                    <input type="text" name="name" placeholder='Name' id="" />
                                    <input type="email" placeholder='Email' name="email" id="" />
                                    <textarea name="" id="" placeholder='Comment' ></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
        </div>
    );
};

export default Footer;