import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { MdOutlineMarkEmailRead } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';

import './contact.css';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_9li7ixy', 'template_qy5yq3b', form.current, 'd02LbtT__BLVGGkNk')
      
      e.target.reset()
    };

  return (
    <section id='contact'>

      <div className="container contact-container">

        <div className="contact-title">
          <h5>Get in Touch</h5>
          <h2>Contact Me</h2>
        </div>

        <div className="contact-options">

          <article className="contact-option">
            <MdOutlineMarkEmailRead className="contact-option-icon" />
            <h4>Email</h4>
            <h5>machrispasana@gmail.com</h5>
            <a href='mailto:machrispasana@gmail.com'target={"_blank"} rel="noreferrer">Send a message</a>
          </article>

          <article className="contact-option">
            <RiMessengerLine className="contact-option-icon" />
            <h4>Messenger</h4>
            <h5>Chris PSangalang</h5>
            <a href='https://m.me/mariechris.sangalang' target={"_blank"} rel="noreferrer">Send a message</a>
          </article>

          <article className="contact-option">
            <BsWhatsapp className="contact-option-icon" />
            <h4>WhatsApp</h4>
            <h5>Chris PSangalang</h5>
            <a href='https://api.whatsapp.com/send?phone=639761100215' target={"_blank"} rel="noreferrer">Send a message</a>
          </article>

        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='fullName' placeholder='Your Full Name' required/>
          <input type="text" name='email' placeholder='Your Email Address' required/>
          <textarea name="message" placeholder='Your Message' rows="10" required></textarea>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>

      </div>
    </section>
  )
}

export default Contact;