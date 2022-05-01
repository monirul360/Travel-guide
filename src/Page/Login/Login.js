import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase';
import Social from '../Social/Social';
import './Login.css';
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const emailBluer = e => {
        setEmail(e.target.value);
    }
    const passwordBluer = e => {
        setPassword(e.target.value);
    }
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );

    if (user) {
        navigate("/checkout");
    }
    const resetPassword = () => {
        if (email) {
            sendPasswordResetEmail(email);
            alert('Sent email');
        } else {
            sendPasswordResetEmail(email);
            alert('Place enter your email');
        }
    }
    const signiUser = e => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div>
            <section>
                <div className="from-container">
                    <div className="from">
                        <h2 id='from-title'>Please Login</h2>
                        <form onSubmit={signiUser}>
                            <input onBlur={emailBluer} type="email" name="text" placeholder='Enter your email' id="" required />
                            <input onBlur={passwordBluer} type="password" name="password" placeholder='Enter your password' id="" required />
                            {loading && <p>loading...</p>}
                            <p style={{ color: 'red' }}>{error?.message}</p>
                            <input type="submit" value="Login" />
                        </form>
                        <p>Booking Travel guide? <Link id='Register' to='/signup'>Please Register</Link></p>
                        <p>Forget Password? <span
                            onClick={resetPassword}
                            id='reset-pass'>Reset Password</span></p>
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