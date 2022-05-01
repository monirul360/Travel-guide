import React from 'react';
import './Social.css';
import google from '../../Image/Social/google.png';
import github from '../../Image/Social/github.png';
const Social = () => {
    return (
        <div>
            <div className="social-container">
                <div>
                    <button>
                        <img src={google} alt="" />
                        <span> Google Sign In</span>
                    </button>
                </div>
                <div>
                    <button>
                        <img src={github} alt="" />
                        <span>Github sign in</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Social;