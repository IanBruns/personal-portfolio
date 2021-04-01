import React from 'react';
import ContactCard from '../../components/ContactCard/ContactCard';

export default function Contact(props) {
    return (
        <div className='Contact'>
            <h2>Let's get in touch!</h2>
            <p>
                If you want to get in touch for collaborations/jobs/music recommendations
                please don't hesitate to reach out!  In fact here: Take a card (I have plenty).
            </p>
            <div className='container'>
                <ContactCard />
            </div>
        </div>
    )
}