import React from 'react';
import { Link } from 'react-router-dom';
import Social from '../Social/Social';
import './Login.css';
const Login = () => {
    return (
        <div>
            <section>
                <div className="from-container">
                    <div className="from">
                        <h2 id='from-title'>Please Login</h2>
                        <form >
                            <input type="text" name="text" placeholder='Enter your email' id="" />
                            <input type="password" name="password" placeholder='Enter your password' id="" />
                            <input type="submit" value="Login" />
                        </form>
                        <p>Booking Travel guide? <Link id='Register' to='/signup'>Please Register</Link></p>
                        <p>Forget Password? <span id='reset-pass'>Reset Password</span></p>
                        <div className="or-flex">
                            <div></div>
                            <h4>OR</h4>
                            <div></div>
                        </div>
                        <Social></Social>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;