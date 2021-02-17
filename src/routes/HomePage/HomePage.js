import React from 'react'
import { Link } from 'react-router-dom'
import HomeIan from '../../images/self/HomeIan.jpg'
import './HomePage.css'

export default function HomePage(props) {
    let directory = ['About', 'Projects', 'Contact'].map((field, i) => {
        return (
            <div className={`home-${field}`} key={i}>
                <Link to={`/${field}`}>
                    {`${field}`}
                </Link>
            </div>
        )
    })

    return (
        <div className='HomePage'>
            <h2>Hello, my name is Ian!</h2>
            <div className='home-container'>
                <div className="home-photo">
                    <img src={HomeIan} alt='' height='500px' />
                </div>
                {directory}
            </div>
        </div>
    )
}