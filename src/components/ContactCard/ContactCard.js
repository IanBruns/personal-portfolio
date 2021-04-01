import React from 'react';
import './ContactCard.css'
import email from '../../images/icons/contact/emailwhite.png'
import linkedin from '../../images/icons/contact/LinkedInWhite.png'
import github from '../../images/icons/contact/githubwhite.png'

export default function ContactCard(props) {
    return (
        <div className='ContactCard'>
            <div className='inner'>
                <div className='front'>
                    <h3>Ian Bruns</h3>
                    <h4>Full Stack Developer</h4>
                </div>
                <div className='back'>
                    <img src={email} alt='' height='30px' />
                    <br />
                    <a href="mailto:ian@rbruns.com" target="_blank" rel='noreferrer'>ian@rbruns.com</a>
                    <br />
                    <img src={linkedin} alt='' height='30px' />
                    <br />
                    <a href="https://www.linkedin.com/in/ianabruns/" target="_blank" rel='noreferrer'>linkedin.com/in/ianabruns/</a>
                    <br />
                    <img src={github} alt='' height='30px' />
                    <br />
                    <a href="https://github.com/IanBruns" target="_blank" rel='noreferrer'>github.com/IanBruns</a>
                </div>
            </div>
        </div>
    )
}