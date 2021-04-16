import React from 'react';
import SkillIcons from '../../components/SkillIcons/SkillIcons';
import './Skills.css';

export default function Skills(props) {
    return (
        <div className='Skills'>
            <h2>Skills Include:</h2>
            <div className='container'>
                <div className='left'>
                    <ul>
                        <li>Javasript</li>
                        <li>TypeScript</li>
                        <li>React (with Hooks)</li>
                        <li>Node</li>
                        <li>PostreSQL</li>
                        <li>HTML/CSS</li>
                    </ul>
                </div>
                <div className='right'>
                    <ul>
                        <li>VSCode</li>
                        <li>REST APIs</li>
                        <li>Test Driven Development</li>
                        <li>Mocha/Chai/Supertest</li>
                        <li>git</li>
                    </ul>
                </div>
            </div>
            <div className='icons'>
                <SkillIcons />
            </div>
        </div>
    )
}