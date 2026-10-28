import React, { useState } from 'react';
import { contactAPI } from '../services/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    schoolName: '',
    city: '',
    phone: '',
    email: '',
    areaOfInterest: 'Robotics Competition Training',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await contactAPI.create(formData);
      setSubmitStatus('success');
      setFormData({
        parentName: '',
        schoolName: '',
        city: '',
        phone: '',
        email: '',
        areaOfInterest: 'Robotics Competition Training',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contact" style={{ 
      minHeight: '100vh',
      maxHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '40px 0'
    }}>
      <div className="wrap" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div className="contact-form-container">
          <div className="form-header">
            <h2 style={{ 
              color: '#12181c',
              fontSize: 'var(--font-size-4xl)',
              fontWeight: '800',
              lineHeight: '1.1',
              marginBottom: 'clamp(16px, 2.5vw, 24px)'
            }}>START A CONVERSATION</h2>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="parentName">Parent / Student Name</label>
              <input
                type="text"
                id="parentName"
                name="parentName"
                value={formData.parentName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="schoolName">School Name</label>
              <input
                type="text"
                id="schoolName"
                name="schoolName"
                value={formData.schoolName}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
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
              <label htmlFor="areaOfInterest">AREA OF INTEREST</label>
              <select
                id="areaOfInterest"
                name="areaOfInterest"
                value={formData.areaOfInterest}
                onChange={handleChange}
              >
                <option value="Robotics Competition Training">Robotics Competition Training</option>
                <option value="AI Competition Preparation">AI Competition Preparation</option>
                <option value="STEM Competition Preparation">STEM Competition Preparation</option>
                <option value="Coding Competition Preparation">Coding Competition Preparation</option>
                <option value="Drone Competition Preparation">Drone Competition Preparation</option>
                <option value="School Partnership">School Partnership</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">MESSAGE</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
              />
            </div>

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'CONNECT WITH THE ACADEMY'}
            </button>

            {submitStatus === 'success' && (
              <p className="success-message">Thank you! Your message has been sent successfully.</p>
            )}
            {submitStatus === 'error' && (
              <p className="error-message">Sorry, there was an error sending your message. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;