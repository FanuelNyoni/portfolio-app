import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);
  const [formBlur, setFormBlur] = useState(false);
  const [formData, setFormData] = useState({ email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code here to send the message (you can use a service like EmailJS or Formspree)
    setMessageSent(true);
    setFormBlur(true);
    setTimeout(() => {
      setMessageSent(false);
      setFormBlur(false);
    }, 10000);
  };

  return (
    <div className="contact-container">
      <h1>Contact</h1>
      <form onSubmit={handleSubmit} className={formBlur ? 'blur' : ''}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button className='form-btn' type="submit">Send</button>
      </form>
      {messageSent && <div className="success-message">Message has been sent!</div>}
    </div>
  );
};

export default Contact;
