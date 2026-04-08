import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { Button } from '../components/ui/button';
import { Eye, EyeOff } from 'lucide-react';
// import { toast } from '../hooks/use-toast';
import './index.css'; // Importing the standard CSS

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.email || !formData.password) {
      toast({
        title: 'Error',
        description: 'Please fill in all fields',
        variant: 'destructive'
      });
      return;
    }

    const users = JSON.parse(localStorage.getItem('amberUsers') || '[]');
    const user = users.find(u => u.email === formData.email && u.password === formData.password);

    if (user) {
      localStorage.setItem('amberUser', JSON.stringify({ id: user.id, name: user.name, email: user.email }));
      toast({
        title: 'Success',
        description: 'Logged in successfully!'
      });
      setTimeout(() => {
        navigate('/');
        window.location.reload();
      }, 1000);
    } else {
      toast({
        title: 'Error',
        description: 'Invalid email or password',
        variant: 'destructive'
      });
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <Link to="/" className="logo-container">
            <span className="logo-text">amber</span>
          </Link>
          <h2 className="welcome-title">Welcome back</h2>
          <p className="welcome-subtitle">Sign in to your account to continue</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-field">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>

            <div className="input-field">
              <label htmlFor="password">Password</label>
              <div className="password-wrapper">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="eye-toggle"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
          </div>

          <div className="form-options">
            <div className="remember-me">
              <input id="remember-me" name="remember-me" type="checkbox" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <div className="forgot-password">
              <a href="#">Forgot password?</a>
            </div>
          </div>

          <button type="submit" className="signin-button">
            Sign In
          </button>

          <div className="signup-prompt">
            <p>
              Don't have an account?{' '}
              <Link to="/signup" className="signup-link">Sign Up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;