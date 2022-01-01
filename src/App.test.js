import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Student Container Component', () => {
  render(<App />);
  const linkElement = screen.findByTestId('studentContainer');
  expect(linkElement).toBeDefined();
});
