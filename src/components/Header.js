import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header(props) {
    return (
        <div className='header'>
            <nav role="navigation">
                <div id="menuToggle">

                    <input type="checkbox" />

                    <span></span>
                    <span></span>
                    <span></span>

                    <ul id="menu">
                        <Link to='/'><li>Home</li></Link>
                        <Link to='/About'><li>About</li></Link>
                        <Link to='/Projects'><li>Projects</li></Link>
                        <Link to='/Contact'><li>Contact</li></Link>
                    </ul>
                </div>
            </nav>
            <h1>Ian Bruns</h1>
        </div>
    )
}