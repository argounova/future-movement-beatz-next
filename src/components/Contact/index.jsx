import React, { useState, useRef } from 'react'
import { ContactStyles } from "./style"
import emailjs from '@emailjs/browser'


const Contact = () => {
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');
  // const [errorMessage, setErrorMessage] = useState('');
  const form = useRef();

  const handleFormChange = (e) => {
    const { target } = e;
    const formType = target.name;
    const formValue = target.value;

    if (formType === 'from_name') {
      setFormName(formValue);
    } else if (formType === 'reply_to') {
      setFormEmail(formValue);
    } else {
      setFormMessage(formValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // if (!validateEmail(formEmail) || !formName) {
    //   setErrorMessage('Valid email and/or name required!');
    //   return;
    // }
    console.log('testing this function');
    console.log(form);
    console.log(form.current);
    emailjs.sendForm('service_kb5ueuo', 'template_rtzya6p', form.current, '-rwhcmI-NaGlHpG5q')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (err) => {
        console.log('FAILED...', err);
      });

    handleShow();
    setFormName('');
    setFormEmail('');
    setFormMessage('');
  };

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  
  return (
    <ContactStyles className="section">
      <div className='intro__area'>
        <h2 id='contact'>Get in Touch</h2>
      </div>

      <div style={{ display: show ? "block" : "none" }}>
        <h1>Message Sent!</h1>
        <p>Thank you for contacting me.  Please allow 2-3 business days for a response.</p>
      </div>

      <form 
        name="contact"
        netlify
        ref={form}
        className='form'  
      >
        <input
          placeholder="Your name..."
          type="text"
          name="from_name"
          value={formName}
          onChange={handleFormChange}  
        />
        <input
          placeholder="Your email..."
          type="email"
          name="reply_to"
          value={formEmail}
          onChange={handleFormChange}  
        />
        <textarea
          placeholder="Your message..."
          type='text'
          name="message"
          rows="5"
          value={formMessage}
          onChange={handleFormChange}
        />
        <button type='button' onClick={handleFormSubmit}>Send Message</button>
      </form>
    </ContactStyles>
  )
}

export default Contact
