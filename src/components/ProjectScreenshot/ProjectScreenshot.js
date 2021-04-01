import React from 'react';
import './ProjectScreenshot.css'
import routine from '../../images/projectimg/screenshot/RightRoutine.png';
import oktober from '../../images/projectimg/screenshot/Oktoberfest.png';
import play from '../../images/projectimg/screenshot/PlayPacket.png';

export default function ProjectScreenshot(props) {
    let screenshot;

    props.projId === 1 ? screenshot = routine
        : (props.projId === 2) ? screenshot = oktober
            : (props.projId === 3) ? screenshot = play
                : screenshot = null;

    let size;
    props.smallScreen === true
        ? size = '200'
        : size = '400'

    return (
        <img className='projImg' src={screenshot} alt='' height={size} width={size} />
    )
}