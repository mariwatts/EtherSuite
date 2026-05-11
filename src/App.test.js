// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders EtherSuite title', () => {
    render(<App />);
    const titleElement = screen.getByText(/EtherSuite/i);
    expect(titleElement).toBeInTheDocument();
});
