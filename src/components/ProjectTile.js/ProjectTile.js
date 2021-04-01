import React from 'react';
import './ProjectTile.css'
import ProjectIcon from '../ProjectIcon/ProjectIcon';
import StackIcon from '../StackIcon/StackIcon';
import ProjectScreenshot from '../ProjectScreenshot/ProjectScreenshot';

export default function ProjectTile(props) {
    return (
        <div className='tile'>
            <div className='container'>
                <ProjectIcon projId={props.project.id} />
                <h3>{props.project.name}</h3>
            </div>
            <div className='container proj'>
                <div className='left'>
                    <p>{props.project.description}</p>
                    <p>Achieved: {props.project.achieved}</p>
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
                <div className='right'>
                    <div className='stack'>
                        <StackIcon str={props.project.stack} />
                    </div>
                    <ProjectScreenshot projId={props.project.id} />
                </div>
            </div>
        </div>
    )
}