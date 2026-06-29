import React, { useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {
  const recipientEmail = 'chynavivero2@gmail.com';

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const hasNameError = name.trim() === '';
    const hasEmailError = email.trim() === '';
    const hasMessageError = message.trim() === '';

    setNameError(hasNameError);
    setEmailError(hasEmailError);
    setMessageError(hasMessageError);

    if (hasNameError || hasEmailError || hasMessageError) {
      return;
    }

    const subject = `Portfolio contact from ${name}`;
    const body = `Name: ${name}\nEmail / Phone: ${email}\n\nMessage:\n${message}`;

    window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <div className="contact-hero">
            <div className="contact-kicker">Contact</div>
            <h1>Let&apos;s build something useful.</h1>
            <p>
              Reach out if you need web help, admin support, or a dependable extra hand on a project.
            </p>
          </div>

          <div className="contact-layout">
            <aside className="contact-summary">
              <h2>What to send</h2>
              <p>
                A short note with your name, a way to reach you, and a quick description of what you need is enough to start.
              </p>

              <Divider className="contact-divider" />

              <div className="contact-detail">
                <MailOutlineIcon />
                <div>
                  <span>Email</span>
                  <a href={`mailto:${recipientEmail}`}>{recipientEmail}</a>
                </div>
              </div>

              <div className="contact-detail">
                <PhoneOutlinedIcon />
                <div>
                  <span>Preferred contact</span>
                  <p>Email</p>
                </div>
              </div>

              <div className="contact-detail">
                <PlaceOutlinedIcon />
                <div>
                  <span>Working style</span>
                  <p>Remote-friendly, responsive, and collaborative</p>
                </div>
              </div>
            </aside>

            <Box component="form" noValidate autoComplete="off" className='contact-form' onSubmit={sendEmail}>
              <div className='form-flex'>
                <TextField
                  required
                  id="contact-name"
                  label="Your Name"
                  placeholder="What's your name?"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  error={nameError}
                  helperText={nameError ? "Please enter your name" : ""}
                  fullWidth
                />
                <TextField
                  required
                  id="contact-email"
                  label="Email / Phone"
                  placeholder="How can I reach you?"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  error={emailError}
                  helperText={emailError ? "Please enter your email or phone number" : ""}
                  fullWidth
                />
              </div>
              <TextField
                required
                id="contact-message"
                label="Message"
                placeholder="Send me any inquiries or questions"
                multiline
                rows={10}
                className="body-form"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                error={messageError}
                helperText={messageError ? "Please enter the message" : ""}
                fullWidth
              />
              <div className="contact-actions">
                <Button variant="contained" type="submit" endIcon={<SendIcon />}>
                  Send message
                </Button>
              </div>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;