import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './Intro.css';
import homePhoto from '../../images/self/HomeIan.jpg'
import ShortAbout from '../../components/ShortAbout/ShortAbout';

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
                    <ShortAbout />
                </div>
            </div>
        </div>
    )
}