import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase';
import Social from '../Social/Social';

const Signup = () => {
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
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    if (user) {
        navigate('/checkout');
    }
    const createUser = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div>
            <section>
                <div className="from-container">
                    <div className="from">
                        <h2 id='from-title'>Please Register</h2>
                        <form onSubmit={createUser} >
                            <input type="text" name="text" placeholder='Name' id="" required />
                            <input onBlur={emailBluer} type="email" name="text" placeholder='Enter your email' id="" required />
                            <input onBlur={passwordBluer} type="password" name="password" placeholder='Enter your password' id="" required />
                            {loading && <p>loading ....</p>}
                            <p style={{ color: 'red' }}>{error?.message}</p>
                            <input type="submit" value="Register" />
                        </form>
                        <p>Already have an account? <Link id='Register' to='/login'>Please Login
                        </Link></p>
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

export default Signup;