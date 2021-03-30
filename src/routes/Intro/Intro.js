import React from 'react';
import './Intro.css';
import homePhoto from '../../images/self/HomeIan.jpg'

export default function Intro(props) {
    return (
        <div className='Intro'>
            <h2>Hi I'm Ian, it's nice to meet you!</h2>
            <img src={homePhoto} alt='I can look professional' height='450px' />
        </div>
    )
}