import { render, fireEvent, cleanup, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import MyComponent from '../app/page';

// Cleanup after each test
afterEach(cleanup);

test('Renders MyComponent with initial state', () => {
  // Render the component
  const { getByText } = render(<MyComponent headerText="Test Header">Test Content</MyComponent>);

  // Check if the initial state is rendered
  expect(getByText('My Component (0 clicks)')).toBeInTheDocument();
});

test('Increments the click count on click', () => {
  // Render the component
  const { getByText, getByTestId } = render(<MyComponent headerText="Test Header">Test Content</MyComponent>);

  // Click the component
  fireEvent.click(getByTestId('my-component'));

  // Check if the click count has increased
  expect(getByText('My Component (1 clicks)')).toBeInTheDocument();
});


test('Cleans up the event listener on unmount', () => {
  // Render the component
  const { unmount } = render(<MyComponent headerText="Test Header">Test Content</MyComponent>);

  // Manually trigger the cleanup function
  unmount();
});