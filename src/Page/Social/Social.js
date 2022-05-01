import React from 'react';
import './Social.css';
import google from '../../Image/Social/google.png';
import github from '../../Image/Social/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase';
import { useNavigate } from 'react-router-dom';
const Social = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, googleuser, googleloading, googleerror] = useSignInWithGoogle(auth);

    const [signInWithGithub, gituser, gitloading, giterror] = useSignInWithGithub(auth);
    if (googleuser || gituser) {
        navigate("/checkout");
    }
    return (
        <div>
            <div className="eror-container">
                {googleloading && <p>Loading....</p>}
                {gitloading && <p>Loading....</p>}
                <p>{googleerror?.message} {giterror?.message}</p>
            </div>
            <div className="social-container">
                <div>
                    <button onClick={() => signInWithGoogle()}>
                        <img src={google} alt="" />
                        <span> Google Sign In</span>
                    </button>
                </div>
                <div>
                    <button onClick={() => signInWithGithub()}>
                        <img src={github} alt="" />
                        <span>Github sign in</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Social;