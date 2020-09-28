import React from 'react';
import './Wip.scss';

import { SocialIcon } from 'react-social-icons';

function Wip() {
    return (
        <div className="wip-screen">
            <div className="container">

                <h1>Hello.</h1>
                <h1>I'm Joris Lodewijks.</h1>

                <div className="socials">
                    <div className="social"><SocialIcon url="https://www.linkedin.com/in/jorislodewijks/" bgColor="#5f5" fgColor="#000" /></div>
                    <div className="social"><SocialIcon url="https://github.com/ScrambledFox" bgColor="#5f5" fgColor="#000" /></div>
                    <div className="social"><SocialIcon url="https://www.instagram.com/jorislodewijks/" bgColor="#5f5" fgColor="#000" /></div>
                </div>

            </div >

            <div className="footer">
                <a href='#/about'>What is this?</a>
            </div >
        </div>
    );
}

export default Wip;
