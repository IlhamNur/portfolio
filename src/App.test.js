import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

beforeAll(() => {
  window.scrollTo = jest.fn();
});

test('renders App component', () => {
  render(
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <App />
    </BrowserRouter>
  );
  // The 'learn react' text doesn't exist in this portfolio app,
  // so we just verify that the App renders without crashing.
});
