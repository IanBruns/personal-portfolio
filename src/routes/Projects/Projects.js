import React from 'react';
import PROJECTS from '../../projectStore'

export default function Projects(props) {
    const breakoutProjects = PROJECTS.map(proj => {
        return (<p>Project</p>)
    })

    return (
        <div className='Projects'>
            <h2>Projects!!</h2>
            {breakoutProjects}
        </div>
    )
}