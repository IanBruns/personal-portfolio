import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './Intro.css';
import homePhoto from '../../images/self/HomeIan.jpg'

export default function Intro(props) {
    const onDesktop = useMediaQuery({ minDeviceWidth: 800 });

    return (
        <div className='Intro'>
            <div className='container'>
                {onDesktop && (
                    <div>
                        <img src={homePhoto} alt='I can look professional' height='450px' />
                    </div>
                )}
                <div className='right'>
                    <h2>Hi I'm Ian!</h2>
                    <h3>It's nice to meet you</h3>
                    <p>
                        I'm a full stack developer in the PERN stack currently living in Denver, CO. I'm
                        passionate about using my programming skills to solve problems while contributing to
                        a positive team culture.
                    </p>
                    <p>
                        If you want to work with someone who's passionate about learning and rearching
                        and creating clean, workable code, let's get in touch!
                    </p>
                </div>
            </div>
        </div>
    )
}