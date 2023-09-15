import React from 'react';
import styles from './TodoList.module.css'

interface TodoListProps {
  todos: string[];
  completedTodos: string[];
  completeTodo: (index: number) => void;
  deleteTodo: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  completedTodos,
  completeTodo,
  deleteTodo,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.containerItem}>
        <h2 className={styles.h2}>Todo List</h2>
        <ul className={styles.ul}>
          {todos.map((todo, index) => (
            <li className={styles.li} key={index}>
              <span className={styles.text}>{todo}</span>
              <button className={styles.buttonComplete} onClick={() => completeTodo(index)}>Complete</button>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.containerItem}>
        <h2 className={styles.h2}>Completed Tasks</h2>
        <ul className={styles.ul}>
          {completedTodos.map((todo, index) => (
            <li className={styles.li} key={index}>
               <span className={styles.textDelete}>{todo}</span>
              <button className={styles.buttonDelete} onClick={() => deleteTodo(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;