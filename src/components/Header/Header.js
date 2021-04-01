import React from 'react';
import './Header.css';
import linkedin from '../../images/icons/contact/LinkedIn.png';
import github from '../../images/icons/contact/github.png';

export default function Header(props) {
    return (
        <React.Fragment>
            <h1>Ian Bruns</h1>
            <div className='header-contact'>
                <a href='https://www.linkedin.com/in/ianabruns/' target="_blank" rel='noreferrer'>
                    <img src={linkedin} alt='' height='30' />
                </a>
                <a href='https://github.com/IanBruns' target="_blank" rel='noreferrer'>
                    <img src={github} alt='' height='30' />
                </a>
            </div>
        </React.Fragment>
    )
}