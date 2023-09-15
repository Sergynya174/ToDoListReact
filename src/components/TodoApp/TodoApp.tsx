import React, { useState } from 'react';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';
import styles from './TodoApp.module.css'

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [completedTodos, setCompletedTodos] = useState<string[]>([]);

  const addTodo = (text: string) => {
    setTodos([...todos, text]);
  };

  const completeTodo = (index: number) => {
    const completedTodo = todos[index];
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
    setCompletedTodos([...completedTodos, completedTodo]);
  };

  const deleteTodo = (index: number) => {
    const newCompletedTodos = completedTodos.filter((_, i) => i !== index);
    setCompletedTodos(newCompletedTodos);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ToDo App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        completedTodos={completedTodos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default TodoApp;