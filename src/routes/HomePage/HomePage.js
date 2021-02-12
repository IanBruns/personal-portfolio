import React from 'react'
import HomeIan from '../../images/HomeIan.jpg'
import './HomePage.css'

export default function HomePage(props) {
    return (
        <div className='HomePage'>
            <h2>Hello, my name is Ian!</h2>
            <div className='home-container'>
                <div className="home-photo">
                    <img src={HomeIan} alt='' height='500px' />
                </div>
                <div className="home-about">About</div>
                <div className="home-projects">Projects</div>
                <div className="home-contact">Contact</div>
            </div>
        </div>
    )
}