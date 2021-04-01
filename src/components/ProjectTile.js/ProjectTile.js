import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './ProjectTile.css'
import ProjectIcon from '../ProjectIcon/ProjectIcon';
import StackIcon from '../StackIcon/StackIcon';
import ProjectScreenshot from '../ProjectScreenshot/ProjectScreenshot';

export default function ProjectTile(props) {
    const smallScreen = useMediaQuery({ maxWidth: 400 })
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
                        <a href={props.project.liveLink} target="_blank" rel='noreferrer'>Application</a>
                        <a href={props.project.repoClient} target="_blank" rel='noreferrer'>Client Repository</a>
                        <a href={props.project.repoServer} target="_blank" rel='noreferrer'>Server Repository</a>
                    </div>
                </div>
                <div className='right'>
                    <div className='stack'>
                        <StackIcon str={props.project.stack} />
                    </div>
                    <div className='screen'>
                        <ProjectScreenshot projId={props.project.id} smallScreen={smallScreen} />
                    </div>
                </div>
            </div>
        </div>
    )
}