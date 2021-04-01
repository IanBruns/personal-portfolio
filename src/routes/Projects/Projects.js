import React from 'react';
import ProjectTile from '../../components/ProjectTile.js/ProjectTile';
import PROJECTS from '../../projectStore'

export default function Projects(props) {
    const breakoutProjects = PROJECTS.map(proj => {
        return <ProjectTile key={proj.id} project={proj} />
    })

    return (
        <div className='Projects'>
            <h2>My Projects</h2>
            {breakoutProjects}
        </div>
    )
}