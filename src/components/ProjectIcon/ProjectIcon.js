import React from 'react';
import './ProjectIcon.css'
import routine from '../../images/projectimg/icon/RightRouteIcon.png';
import oktober from '../../images/projectimg/icon/SurviveOktoberfestIcon.png';
import play from '../../images/projectimg/icon/PlayPacketIcon.png';

export default function ProjectIcon(props) {
    let icon;

    props.projId === 1 ? icon = routine
        : (props.projId === 2) ? icon = oktober
            : (props.projId === 3) ? icon = play
                : icon = null;

    return (
        <img className='projIcon' src={icon} alt='' height='25' />
    )
}