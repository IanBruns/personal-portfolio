import React from 'react';

export default function ContactForm(props) {
    return (
        <form action="https://formspree.io/f/mqkglkdg" method="POST">
            <label htmlFor="user-name">Your Name:</label>
            <input id="user-name" type="text" name="name" required />

            <label htmlFor="user-email">Your Email</label>
            <input id="user-email" type="text" name="_replyto"
                placeholder="So I can get back to you!" required />

            <label htmlFor="user-message">Message:</label>
            <textarea id="user-message" name="message" placeholder="Put your message here!" />
            <button type="submit">Send</button>
            <button type="reset">Clear</button>
        </form>
    )
}