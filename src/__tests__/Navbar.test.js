
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from '../components/Navbar';

describe('Navbar component', () => {
  test('renders ', () => {
    const { getByText } = render(
        <Router>
          <Navbar />
        </Router>
      );
    const linkElement = getByText('Quickly Take Home');
    expect(linkElement).toBeInTheDocument();
  });
});