import React from 'react';
import './Error.css';
const Error = () => {
    return (
        <div>
            <div className="error-container">
                <div className="error">
                    <h1 id='oops'>Oops !</h1>
                    <h1>404</h1>
                    <h2>Page not found</h2>
                </div>
            </div>
        </div >
    );
};

export default Error;