import React from 'react';
import './Banner.css';
import banner from '../../../Image/Slider/banner.png';
const Banner = () => {
    return (
        <div>
            <div className="banner">
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;