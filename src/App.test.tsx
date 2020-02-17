import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders our application with header', () => {
  const { getByRole } = render(<App />);
  const element = getByRole("input");
  expect(element).toBeInTheDocument();
  
});
