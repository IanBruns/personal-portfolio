import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';

export default function Contact(props) {
    return (
        <div className='Contact'>
            <h2>Let's get in touch!</h2>
            <p>
                If you want to get in touch for colalborations/jobs/music recommendations
                please don't hesitate to reach out!  All of my contact info is in the header,
                and I also have a form to email me!
            </p>
            <ContactForm />
        </div>
    )
}