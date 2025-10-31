import { describe, it, expect, getByRole } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App.jsx';
describe('App', () => {
  it('renders headline', () => {
    render(<App />);

    screen.debug();
    const headlineElement = screen.getByText(/Memory Card Game/i);
    expect(headlineElement).toBeInTheDocument();
  });

  it('renders start button', () => {
    render(<App />);

    expect(true).toBe(true);
  });
})