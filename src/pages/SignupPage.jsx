import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import EmailInput from '../components/EmailInput';
import PasswordInput from '../components/PasswordInput';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: email,
    password: password,
    industry: '',
    businessType: '',
    website: '',
    businessRegistration: 'corporation',
    phone: '',
    businessNumber: '',
    expectedActivity: ''
  });

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleChangeConfirmEmail = (e) => {
    setConfirmEmail(e.target.value);
  };

  const [error, setError] = useState('');;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (email !== confirmEmail) {
      setError('Emails do not match');
      return;
    }
    if(password.length < 6) {
      setError('Password must be length 6 or more');
      return;
    }
    
    try {
      const response = await axios.post('https://api-dev.quicklyinc.com/auth/signup', {
        user: {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: email,
          password: password
        },
        company: {
          activity: {
            early_pay_intent: true,
            expected_activity: formData.expectedActivity
          },
          industry: { value: formData.industry, label: formData.industry },
          business_type: { label: formData.businessType, value: formData.businessType },
          website: formData.website,
          business_registration: formData.businessRegistration,
          phone: formData.phone,
          business_number: formData.businessNumber,
          has_trade_name: false,
          legal_name: `${formData.firstName} ${formData.lastName} Co`
        }
      });
      console.log({
        user: {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: email,
          password: password
        },
        company: {
          activity: {
            early_pay_intent: true,
            expected_activity: formData.expectedActivity
          },
          industry: { value: formData.industry, label: formData.industry },
          business_type: { label: formData.businessType, value: formData.businessType },
          website: formData.website,
          business_registration: formData.businessRegistration,
          phone: formData.phone,
          business_number: formData.businessNumber,
          has_trade_name: false,
          legal_name: `${formData.firstName} ${formData.lastName} Co`
        }
      });
      // Handle successful signup
      console.log('Signup successful:', response.data);
    } catch (error) {
      console.log({
        user: {
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          password: formData.password
        },
        company: {
          activity: {
            early_pay_intent: true,
            expected_activity: formData.expectedActivity
          },
          industry: { value: formData.industry, label: formData.industry },
          business_type: { label: formData.businessType, value: formData.businessType },
          website: formData.website,
          business_registration: formData.businessRegistration,
          phone: formData.phone,
          business_number: formData.businessNumber,
          has_trade_name: false,
          legal_name: `${formData.firstName} ${formData.lastName} Co`
        }
      })
      console.error('Signup error:', error);
      // Handle signup error
      setError('Signup failed. Please try again.');
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Signup</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <EmailInput value={email} onChange={handleChangeEmail}/>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="confirmEmail">Confirm Email</label>
          <input
            type="email"
            id="confirmEmail"
            name="confirmEmail"
            value={confirmEmail}
            onChange={handleChangeConfirmEmail}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <PasswordInput value={password} onChange={handleChangePassword} />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChangeConfirmPassword}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="industry">Industry</label>
            <input
              type="text"
              id="industry"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="businessType">Business Type</label>
            <input
              type="text"
              id="businessType"
              name="businessType"
              value={formData.businessType}
              onChange={handleChange}
              className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="website">Website</label>
          <input
            type="text"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="businessNumber">Business Number</label>
          <input
            type="text"
            id="businessNumber"
            name="businessNumber"
            value={formData.businessNumber}
            onChange={handleChange}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="expectedActivity">Expected Activity</label>
          <input
            type="text"
            id="expectedActivity"
            name="expectedActivity"
            value={formData.expectedActivity}
            onChange={handleChange}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">Signup</button>
      </form>
      <p className="mt-4">Already have an account? <Link to="/login" className="text-blue-500 hover:text-blue-700">Login here</Link>.</p>
    </div>
  );
};

export default SignupPage;
