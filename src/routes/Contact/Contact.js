import React from 'react';

export default function Contact(props) {
    return (
        <div className='contact'>
            <form action="https://formspree.io/f/mqkglkdg" method="POST">
                <label for="user-name">Your Name:</label>
                <input id="user-name" type="text" name="name" required />

                <label for="user-email">Your Email</label>
                <input id="user-email" type="text" name="_replyto"
                    placeholder="So I can get back to you!" required />

                <label for="user-message">Message:</label>
                <textarea id="user-message" name="message" placeholder="Put your message here!" />
                <button type="submit">Send</button>
                <button type="reset">Clear</button>
            </form>
        </div>
    )
}