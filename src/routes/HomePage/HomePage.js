import React from 'react'
import { Link } from 'react-router-dom'
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
                <div className="home-about">
                    <Link to='/About'>
                        About
                    </Link>
                </div>
                <div className="home-projects">
                    <Link to='/Projects'>
                        Projects
                    </Link>
                </div>
                <div className="home-contact">
                    <Link to='/Contact'>
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    )
}