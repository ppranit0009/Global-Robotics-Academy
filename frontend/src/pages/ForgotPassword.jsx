import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Footer from '../components/Footer.jsx';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Password reset requested for:', email);
    setIsSubmitted(true);
  };

  return (
    <div className="login-page">
      <div className="wrap">
        <div className="login-container">
          <div className="login-header">
            <h1>Recover Your <span className="orange">Account</span></h1>
            <p className="lede">Enter your email address and we'll send you a link to reset your password.</p>
          </div>
          
          {!isSubmitted ? (
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <button type="submit" className="btn login-btn">
                Send Reset Link ↗
              </button>
              
              <div className="signup-link">
                <p>Remember your password? <Link to="/login">Sign in</Link></p>
              </div>
            </form>
          ) : (
            <div className="login-form">
              <div className="success-message">
                <p>Password reset link has been sent to your email address.</p>
                <p>Please check your inbox and follow the instructions.</p>
              </div>
              <div className="signup-link">
                <p><Link to="/login">Back to Sign In</Link></p>
              </div>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ForgotPassword;