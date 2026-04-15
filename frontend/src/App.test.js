import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the landing page navigation', () => {
  render(<App />);
  const linkElement = screen.getByText(/open page two/i);
  expect(linkElement).toBeInTheDocument();
});
