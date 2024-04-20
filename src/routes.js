import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import MyProfilePage from './pages/MyProfilePage';

const AppRoutes = () => (
  <Routes>
    {/* idealy we'd want a homepage, but for now ill leave it as login */}
    <Route path="/" element={<LoginPage />} /> 
    <Route path="/login" element={<LoginPage />} />
    <Route path="/signup" element={<SignupPage />} />
    <Route path="/profile" element={<MyProfilePage />} />
  </Routes>
);

export default AppRoutes;