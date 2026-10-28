import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Footer from '../components/Footer.jsx';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
    // Set authentication state
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('userEmail', formData.email);
    // Redirect to home page
    navigate('/');
  };

  return (
    <div className="login-page">
      <div className="wrap">
        <div className="login-container">
          <div className="login-header">
            <h1>Start Your <span className="orange">Journey</span></h1>
            <p className="lede">Sign in to access your robotics competition dashboard and track your progress.</p>
          </div>
          
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
              />
            </div>
            
            <div className="form-options">
              <label className="checkbox-label">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <Link to="/forgot-password" className="forgot-link">Forgot password?</Link>
            </div>
            
            <button type="submit" className="btn login-btn">
              Sign In ↗
            </button>
            
            <div className="signup-link">
              <p>Don't have an account? <Link to="/signup">Create one</Link></p>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Login;