import React from 'react';
import { render, screen } from '@testing-library/react';
import PasswordInput from '../components/PasswordInput';

test('renders password input component', () => {
  render(<PasswordInput value="" onChange={() => {}} />);
  const passwordInput = screen.getByLabelText('Password');
  expect(passwordInput).toBeInTheDocument();
});