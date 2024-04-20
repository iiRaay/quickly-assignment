import React from 'react';
import { render } from '@testing-library/react';
import SubmitButton from '../components/SubmitButton';

test('SubmitButton renders correctly', () => {
  const { getByText } = render(<SubmitButton />);

  const buttonElement = getByText('Login');
  expect(buttonElement).toBeInTheDocument();
});