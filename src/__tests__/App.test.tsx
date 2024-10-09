// import react-testing methods
import { render, screen } from '@testing-library/react';
// userEvent library simulates user interactions by dispatching the events that would happen if the interaction took place in a browser.
// import userEvent from '@testing-library/user-event'
// add custom jest matchers from jest-dom
import '@testing-library/jest-dom';
import App from '../App';

// the component to test

it('loads and displays greeting', async () => {
  // Render a React element into the DOM
  render(<App />);
  const headingElement = screen.getByRole('heading');
  expect(headingElement).toHaveTextContent(/Hello, React with TypeScript!/);
});
