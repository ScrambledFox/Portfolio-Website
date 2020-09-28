import React from 'react';
import './Wip.scss';

import { SocialIcon } from 'react-social-icons';

function About() {
    return (
        <div className="wip-screen">
            <div className="container">

                <h1>This is a portfolio.</h1>
                <p>But I'm not done yet.</p>
                <p>This portfolio is a work in progress and will contain information about me soon! You can check my socials for current activities!</p>

                <div className="socials">
                    <div className="social"><SocialIcon url="https://www.linkedin.com/in/jorislodewijks/" bgColor="#5f5" fgColor="#000" /></div>
                    <div className="social"><SocialIcon url="https://github.com/ScrambledFox" bgColor="#5f5" fgColor="#000" /></div>
                    <div className="social"><SocialIcon url="https://www.instagram.com/jorislodewijks/" bgColor="#5f5" fgColor="#000" /></div>
                </div>

            </div >

            <div className="footer">
            </div >
        </div>
    );
}

export default About;
