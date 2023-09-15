import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoApp from './TodoApp/TodoApp';

test('renders todo app', () => {
  render(<TodoApp />);
  const headerElement = screen.getByText(/ToDo App/i);
  expect(headerElement).toBeInTheDocument();
});