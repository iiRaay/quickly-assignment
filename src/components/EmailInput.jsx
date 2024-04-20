import React from 'react';

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

export default EmailInput;
