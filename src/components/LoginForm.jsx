import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import Axios library

// Email input component
const EmailInput = ({ value, onChange }) => (
  <div className="mb-4">
    <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
    <input
      type="email"
      id="email"
      value={value}
      onChange={onChange}
      className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      required
    />
  </div>
);

// Password input component
const PasswordInput = ({ value, onChange }) => (
  <div className="mb-4">
    <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
    <input
      type="password"
      id="password"
      value={value}
      onChange={onChange}
      className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      required
    />
  </div>
);

// Submit button component
const SubmitButton = ({ onSubmit }) => (
  <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Login</button>
);

// Login form component
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    setError('');
    
    try {
      const response = await axios.post('https://api-dev.quicklyinc.com/auth/login', {
        email: email,
        password: password
      });
      console.log('Login successful:', response.data);
      localStorage.setItem('token', response.data.token);

    } catch (error) {
      console.error('Login error:', error);
      setError('Login failed. Please check your email and password.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <EmailInput value={email} onChange={(e) => setEmail(e.target.value)} />
      <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} />
      <SubmitButton />
      <Link to="/signup" className="block text-center mt-4 text-blue-500 hover:text-blue-700">Don't have an account? Sign up here.</Link>
    </form>
  );
};

export default LoginForm;
