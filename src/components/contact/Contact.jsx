import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    contact_name: "",
    contact_email: "",
    contact_message: "",
  });

  const [formErrors, setFormErrors] = useState({
    contact_name: "",
    contact_email: "",
    contact_message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.contact_name) {
      errors.contact_name = "Name is required";
    }
    if (!formData.contact_email) {
      errors.contact_email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.contact_email)) {
      errors.contact_email = "Invalid email format";
    }
    if (!formData.contact_message) {
      errors.contact_message = "Message is required";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Simulate form submission to Formspree (replace with actual Formspree action URL)
      // You should replace 'https://your-formspree-endpoint' with your Formspree endpoint
      // Example: const formUrl = 'https://formspree.io/your-email@example.com';
      const formUrl = 'https://formspree.io/f/mrgwyrdd';

      try {
        // Simulate form submission
        await fetch(formUrl, {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        // Form submission successful, reset form and show thank you message
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            contact_name: "",
            contact_email: "",
            contact_message: "",
          });
        }, 5000); // Reset the form after 5 seconds
      } catch (error) {
        console.error('Form submission error:', error);
      }
    }
  };

  return (
    <div id="contact" className="contact">
            <div className="page-title">&lt;Contact. /&gt;</div>
      <div className="contact-left-card">
        <p className="contact-custom-message">
          "when everything fails, drink water"
        </p>
      </div>
      <div className={`contact-right-card ${isSubmitted ? 'submitted' : ''}`}>
        {isSubmitted ? (
          <div className="thank-you-message">
            Thank you, we will get in touch soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="contact-form-group">
              <label htmlFor="contact_name">Name</label>
              <input
                className={`contact-input ${formErrors.contact_name ? 'error' : ''}`}
                type="text"
                name="contact_name"
                id="contact_name"
                placeholder="Name"
                value={formData.contact_name}
                onChange={handleChange}
              />
              {formErrors.contact_name && (
                <span className="contact-error-message">
                  {formErrors.contact_name}
                </span>
              )}
            </div>
            <div className="contact-form-group">
              <label htmlFor="contact_email">Email</label>
              <input
                className={`contact-input ${formErrors.contact_email ? 'error' : ''}`}
                type="email"
                name="contact_email"
                id="contact_email"
                placeholder="Email"
                value={formData.contact_email}
                onChange={handleChange}
              />
              {formErrors.contact_email && (
                <span className="contact-error-message">
                  {formErrors.contact_email}
                </span>
              )}
            </div>
            <div className="contact-form-group">
              <label htmlFor="contact_message">Message</label>
              <textarea
                className={`contact-textarea ${formErrors.contact_message ? 'error' : ''}`}
                name="contact_message"
                id="contact_message"
                placeholder="Message"
                value={formData.contact_message}
                onChange={handleChange}
              ></textarea>
              {formErrors.contact_message && (
                <span className="contact-error-message">
                  {formErrors.contact_message}
                </span>
              )}
            </div>
            <button className="app-button" style={{margin: "auto"}} type="submit">
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
