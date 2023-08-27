import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear related error when user starts typing
    setFormErrors({
      ...formErrors,
      [name]: ''
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    const errors = {};
    if (!formData.name) errors.name = 'Name is required.';
    if (!formData.email) errors.email = 'Email is required.';
    if (!formData.message) errors.message = 'Message is required.';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Simulate sending data to the server
    setIsFormSubmitted(true);
    setTimeout(() => {
      setIsFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, 3000); // Reset after 3 seconds
  };


  return (
    <div className="contact-container">
      <div className="left-card">
        <p className={`custom-message ${isFormSubmitted ? 'message-hidden' : ''}`}>
          "The only way to do great work is to love what you do." – Steve Jobs
        </p>
      </div>
      <div className="right-card">
        <form className={`contact-form ${isFormSubmitted ? 'form-submitted' : ''}`} onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className={`animated-input ${formErrors.name ? 'input-error' : ''}`}
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
          />
          {formErrors.name && <span className="error-message">{formErrors.name}</span>}

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className={`animated-input ${formErrors.email ? 'input-error' : ''}`}
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {formErrors.email && <span className="error-message">{formErrors.email}</span>}

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            className={`animated-input ${formErrors.message ? 'input-error' : ''}`}
            placeholder="Message"
            rows="4"
            value={formData.message}
            onChange={handleInputChange}
          />
          {formErrors.message && <span className="error-message">{formErrors.message}</span>}

          <button type="submit" className="send-button">
            {isFormSubmitted ? 'Sending...' : 'Send'}
          </button>
        </form>
        {isFormSubmitted && (
          <div className="loading-container">
            <p className="submission-message">
              Message Sent! We'll get back to you soon.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
