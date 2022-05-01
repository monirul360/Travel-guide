import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import fb from '../../../Image/footer/facebook.png';
import tw from '../../../Image/footer/Twitter.png';
import li from '../../../Image/footer/linkedin.png';
import go from '../../../Image/footer/instagram.png';
const Footer = () => {
    return (
        <div>
            <footer>
                <section>
                    <div className="footer-container">
                        <div className="footer-social">
                            <ul>
                                <li><Link to='/'><img src={fb} alt="" /></Link></li>
                                <li><Link to='/'><img src={tw} alt="" /></Link></li>
                                <li><Link to='/'><img src={li} alt="" /></Link></li>
                                <li><Link to='/'><img src={go} alt="" /></Link></li>
                            </ul>
                        </div>
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
                                    <br />
                                    <input type="submit" value="Submit" />
                                </div>
                            </div>
                        </div>
                        <div className="copy-right">
                            <hr />
                            <p>Copyright &copy; 2022 Travel guide All Right Reserved</p>
                        </div>
                    </div>
                </section>
            </footer>
        </div>
    );
};

export default Footer;