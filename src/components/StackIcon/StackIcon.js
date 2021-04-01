import React from 'react';
import react from '../../images/icons/skills/react.png';
import hooks from '../../images/icons/skills/hooks.png';
import node from '../../images/icons/skills/node.png';
import postgresql from '../../images/icons/skills/postgresql.png';

export default function StackIcon(props) {
    return (
        <React.Fragment>
            {props.str.toLowerCase().includes('react') && (
                <img src={react} alt='' height='60px' />
            )}
            <br />
            {props.str.toLowerCase().includes('hooks') && (
                <img src={hooks} alt='' height='60px' />
            )}
            <br />
            {props.str.toLowerCase().includes('node') && (
                <img src={node} alt='' height='60px' />
            )}
            <br />
            {props.str.toLowerCase().includes('postgres') && (
                <img src={postgresql} alt='' height='60px' />
            )}
        </React.Fragment>
    )
}