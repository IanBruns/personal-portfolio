import React from 'react';
import './Header.css';
import linkedin from '../../images/icons/contact/LinkedIn.png';
import github from '../../images/icons/contact/github.png';

export default function Header(props) {
    return (
        <React.Fragment>
            <h1>Ian Bruns</h1>
            <div className='header-contact'>
                <a href='https://www.linkedin.com/in/ianabruns/'>
                    <img src={linkedin} alt='' height='30px' />
                </a>
                <a href='https://github.com/IanBruns'>
                    <img src={github} alt='' height='30px' />
                </a>
            </div>
        </React.Fragment>
    )
}