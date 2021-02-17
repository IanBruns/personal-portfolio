import React from 'react'
import './AboutPage.css'
import css from '../../images/icons/css.png'
import html from '../../images/icons/html.png'
import git from '../../images/icons/git.png'
import node from '../../images/icons/node.png'
import postgresql from '../../images/icons/postgresql.png'
import react from '../../images/icons/react.png'
import javascript from '../../images/icons/javascript.png'

export default function AboutPage(props) {
    return (
        <div className='AboutPage'>
            <h2>Hi! I'm Ian, nice to meet you!</h2>
            <div className='about-container'>
                <div className='about-about'>
                    <p>
                        Before I got started in development, I was working in customer service
                        roles, most recently as a payroll advisor for a large company.  Over time
                        I started to learn what I like: Problem solving, creating, working in the
                        more technical aspects of my roles.  I bought a $20 programming book and
                        became absorbed in the material
                    </p>
                    <p>
                        So I took a dive and joined the Thinkful! Engineering Immersion bootcamp to
                        better refine my programming skills.  In this program I worked on full stack
                        applicaitons (PERN stack).  I learned far more than I could have expected in
                        such a short amount of time, and enjoyed the process of programming and learning
                    </p>
                </div>
                <div className='about-skills'>
                    <p>Skills include:</p>
                    <div className='list'>
                        <ul>
                            <li>React (with hooks)</li>
                            <li>Node</li>
                            <li>Postgres</li>
                        </ul>
                        <ul>
                            <li>TDD</li>
                            <li>REST APIs</li>
                        </ul>
                    </div>
                </div>
                <div className='about-icons'>
                    <img src={javascript} alt='' height='' />
                    <img src={html} alt='' height='' />
                    <img src={css} alt='' height='' />
                    <img src={react} alt='' height='' />
                    <img src={node} alt='' height='' />
                    <img src={postgresql} alt='' height='' />
                    <img src={git} alt='' height='' />
                </div>
                <div className='about-facts'>
                    <p>
                        When I'm not programming, you can usually see me listening to/making music
                        (I'm up to like 4 or 5 instruments now), writing comedy - I wrote for a
                        sports YouTube channel in college, or playing dutch blitz
                    </p>
                </div>
                <div className='about-cont'>
                    <p>
                        Also thanks to my last job, I have been honing a skill at ping pong (the great
                        game)
                    </p>
                </div>
            </div>
        </div>
    )
}