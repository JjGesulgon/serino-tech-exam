"use client";
import React, { useReducer, useState } from 'react';

const todosReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      // Add a new todo with a unique id and text payload
      return [...state, { id: Date.now(), text: action.payload }];
      
    case 'REMOVE_TODO':
      // Remove todo based on the id payload
      return state.filter((todo) => todo.id !== action.payload);

    default:
      // Return the current state if the action type is not recognized
      return state;
  }
};

// TodoList Component
const TodoList = () => {
  // UseReducer hook to manage state using the todosReducer function
  const [todos, dispatch] = useReducer(todosReducer, []);

  // State to manage the input value for adding a new todo
  const [newTodo, setNewTodo] = useState('');

  // Function to handle adding a new todo
  const addTodo = () => {
    if (newTodo.trim() !== '') {
      // Dispatch the ADD_TODO action with the newTodo payload
      dispatch({ type: 'ADD_TODO', payload: newTodo });
      // Clear the input field after adding a todo
      setNewTodo('');
    }
  };

  // Function to handle removing a todo based on its id
  const removeTodo = (id) => {
    // Dispatch the REMOVE_TODO action with the todo's id as payload
    dispatch({ type: 'REMOVE_TODO', payload: id });
  };

  // Render the TodoList component
  return (
    <div>
      {/* Display the list of todos */}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {/* Display the todo text */}
            {todo.text} 
            {/* Button to remove the todo, onClick triggers removeTodo with todo's id */}
            <button className="ml-2 text-red-500" onClick={() => removeTodo(todo.id)}>Remove todo</button>
          </li>
        ))}
      </ul>
      
      {/* Input field to add a new todo, onChange updates the newTodo state */}
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter todo"
        /> 
        {/* Button to add a new todo, onClick triggers addTodo */}
        <button className='ml-2 text-green-500' onClick={addTodo}>Add todo</button>
      </div>
    </div>
  );
};

// Export the TodoList component
export default TodoList;