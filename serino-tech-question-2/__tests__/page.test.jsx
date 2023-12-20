import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../app/page';

describe('TodoList component', () => {

  test('Adds and removes todos', async () => {

    // Render the TodoList component
    render(<TodoList />);

    // Get input field and "Add todo" button
    const inputField = screen.getByPlaceholderText('Enter todo');
    const addButton = screen.getByText('Add todo');

    // Simulate adding a new todo
    fireEvent.change(inputField, { target: { value: 'Test Todo' } });
    fireEvent.click(addButton);

    // Check if the added todo is in the document
    const addedTodo = screen.getByText('Test Todo');
    expect(addedTodo).toBeInTheDocument();

    // Get the "Remove todo" button and simulate clicking it
    const removeButton = screen.getByText('Remove todo');
    fireEvent.click(removeButton);

    // Wait for the removal to complete and check if the todo is no longer in the document
    await waitFor(() => {
      const removedTodo = screen.queryByText('Test Todo');
      expect(removedTodo).not.toBeInTheDocument();
    });
    
  });

});