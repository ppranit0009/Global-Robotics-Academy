import React from 'react';
import Contact from '../components/Contact.jsx';
import Footer from '../components/Footer.jsx';

const ContactPage = () => {
  return (
    <div className="page">
      <section className="contact-page-header">
        <div className="wrap">
          <h1>Contact Us</h1>
          <p className="lede">Have questions about our programs? We'd love to hear from you.</p>
        </div>
      </section>
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;