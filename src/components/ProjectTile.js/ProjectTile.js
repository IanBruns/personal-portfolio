import React from 'react';

export default function ProjectTile(props) {
    return (
        <div className='tile'>
            <h3>{props.project.name}</h3>
            <p>{props.project.description}</p>
            <p>{props.project.stack}</p>
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