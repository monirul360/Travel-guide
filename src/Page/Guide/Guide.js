import React from 'react';
import './Guide.css';
import Different from '../../Image/Guide/travel-icon.png';
import Summer from '../../Image/Guide/travel-icon4.png';
import Mountains from '../../Image/Guide/travel-icon2.png';
const Guide = () => {
    return (
        <div>
            <section>
                <div className="guide-title">
                    <h1>SELECT OFFERS FOR TRAVELING</h1>
                    <p>Tell us what you like about traveling in words.We will give you all kinds of information about the exact place .Check out our offers for safe travel abroad .To know more about our offers read more
                        Click.all the best</p>
                </div>
                <div className="guide-container">
                    <div className="guide">
                        <img src={Mountains} alt="" />
                        <h1>Mountains guide</h1>
                        <p>If you want to travel in the mountains, take our offer
                        </p>
                        <button id='guide-button'>Read More</button>
                    </div>
                    <div className="guide">
                        <img src={Different} alt="" />
                        <h1>Different Countrys</h1>
                        <p>Do you want to travel? You can come to us without any worries
                        </p>
                        <button id='guide-button'>Read More</button>
                    </div>
                    <div className="guide">
                        <img src={Summer} alt="" />
                        <h1>Summer Rest</h1>
                        <p>Do you want to travel for summer vacation? Come to us
                        </p>
                        <button id='guide-button'>Read More</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Guide;