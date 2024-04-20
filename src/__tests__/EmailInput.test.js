import React from 'react';
import { render, screen } from '@testing-library/react';
import EmailInput from '../components/EmailInput';

test('renders email input component', () => {
  render(<EmailInput value="" onChange={() => {}} />);
  const emailInput = screen.getByLabelText('Email');
  expect(emailInput).toBeInTheDocument();
});