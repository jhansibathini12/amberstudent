import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { Button } from '../components/ui/button';
import { Eye, EyeOff } from 'lucide-react';
// import { toast } from '../hooks/use-toast';
import './index.css'; // Import the new CSS file

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      toast({ title: 'Error', description: 'Please fill in all fields', variant: 'destructive' });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast({ title: 'Error', description: 'Passwords do not match', variant: 'destructive' });
      return;
    }

    if (formData.password.length < 6) {
      toast({ title: 'Error', description: 'Password must be at least 6 characters', variant: 'destructive' });
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem('amberUsers') || '[]');
    const userExists = existingUsers.find(user => user.email === formData.email);
    
    if (userExists) {
      toast({ title: 'Error', description: 'User already exists with this email', variant: 'destructive' });
      return;
    }

    const newUser = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      password: formData.password
    };
    
    existingUsers.push(newUser);
    localStorage.setItem('amberUsers', JSON.stringify(existingUsers));
    localStorage.setItem('amberUser', JSON.stringify({ id: newUser.id, name: newUser.name, email: newUser.email }));

    toast({ title: 'Success', description: 'Account created successfully!' });

    setTimeout(() => {
      navigate('/');
      window.location.reload();
    }, 1000);
  };

  return (
    <div className="signup-page-wrapper">
      <div className="signup-card">
        <header className="signup-header">
          <Link to="/" className="brand-logo">
            <span>amber</span>
          </Link>
          <h2 className="signup-title">Create your account</h2>
          <p className="signup-subtitle">Join millions of students finding their perfect home</p>
        </header>

        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-group-stack">
            <div className="form-field">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-field">
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

            <div className="form-field">
              <label htmlFor="password">Password</label>
              <div className="password-input-wrapper">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                />
                <button
                  type="button"
                  className="password-toggle-btn"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
              />
            </div>
          </div>

          <Button type="submit" className="signup-submit-btn">
            Sign Up
          </Button>

          <div className="login-redirect">
            <p>
              Already have an account?{' '}
              <Link to="/login" className="login-link">Sign In</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;