import React from 'react';
import ProjectIcon from '../ProjectIcon/ProjectIcon';
import StackIcon from '../StackIcon/StackIcon';

export default function ProjectTile(props) {
    return (
        <div className='tile'>
            <div className='container'>
                <ProjectIcon projId={props.project.id} />
                <h3>{props.project.name}</h3>
            </div>
            <p>{props.project.description}</p>
            <StackIcon str={props.project.stack} />
            <p>{props.project.achieved}</p>
            <div className='tile-buttons'>
                <a href={props.project.liveLink}>
                    <button>Application</button>
                </a>
                <a href={props.project.repoClient}>
                    <button>Client Repository</button>
                </a>
                <a href={props.project.repoServer}>
                    <button>Server Repository</button>
                </a>
            </div>
        </div>
    )
}