import React from 'react';
import css from '../../images/icons/skills/css.png'
import git from '../../images/icons/skills/git.png'
import hooks from '../../images/icons/skills/hooks.png'
import html from '../../images/icons/skills/html.png'
import javascript from '../../images/icons/skills/javascript.png'
import node from '../../images/icons/skills/node.png'
import postgresql from '../../images/icons/skills/postgresql.png'
import react from '../../images/icons/skills/react.png'

export default function SkillIcons(props) {
    return (
        <React.Fragment>
            <img src={javascript} alt='' height='60px' />
            <img src={react} alt='' height='60px' />
            <img src={hooks} alt='' height='60px' />
            <img src={node} alt='' height='60px' />
            <img src={postgresql} alt='' height='60px' />
            <img src={html} alt='' height='60px' />
            <img src={css} alt='' height='60px' />
            <img src={git} alt='' height='60px' />
        </React.Fragment>
    )
}