import React from 'react';
import react from '../../images/icons/skills/react.png';
import hooks from '../../images/icons/skills/hooks.png';
import node from '../../images/icons/skills/node.png';
import postgresql from '../../images/icons/skills/postgresql.png';

export default function StackIcon(props) {
    let stack = [];

    if (props.str.toLowerCase().includes('react')) {
        stack.push(react)
    }
    if (props.str.toLowerCase().includes('hooks')) {
        stack.push(hooks)
    }
    if (props.str.toLowerCase().includes('node')) {
        stack.push(node)
    }
    if (props.str.toLowerCase().includes('postgres')) {
        stack.push(postgresql)
    }

    const display = stack.map(skill => <img classname='stackIcon' src={skill} alt='' height='60' />)

    return (
        <React.Fragment>
            {display}
        </React.Fragment>
    )
}