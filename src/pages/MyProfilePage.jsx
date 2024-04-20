import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch user data from the server
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token'); // Retrieve token from local storage
        const response = await axios.get('https://api-dev.quicklyinc.com/auth/user', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUserData(response.data.user);
        setLoading(false);
      } catch (error) {
        console.error('Profile fetch error:', error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    // Remove token from local storage 
    localStorage.removeItem('token');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>My Profile</h1>
      <div>
        <p>First Name: {userData.first_name}</p>
        <p>Last Name: {userData.last_name}</p>
        <p>Email: {userData.email}</p>
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default MyProfilePage;
