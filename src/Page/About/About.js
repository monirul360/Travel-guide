import React from 'react';
import './About.css';
import aboutImg from '../.../../../Image/About/about.png'
const About = () => {
    return (
        <div>
            <section className="about-section">
                <div className="about-container">
                    <div className="about-text">
                        <h2 id='about-title'>About Me !</h2>
                        <p>Hello!! I am Md Monirul Islam. I went to be a web-developer.I am trying to explore myself. So, I enrolled the course compleate web-development by Jhankar Mahbub and I am successfully continuing my course. I am fully discipline , dedicat and determine about my work.I have set a goal to be a junior frontend developer in 2022 and get a job/intern and I am daynight hard working for this. If I am successful It will be a big achievement in my life And I will make my parents proud of me</p>
                    </div>
                    <div className="about-img">
                        <img src={aboutImg} alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;