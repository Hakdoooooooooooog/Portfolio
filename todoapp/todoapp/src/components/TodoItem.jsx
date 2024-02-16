import React from "react";
import styles from "./todoitem.module.css";

const TodoItem = (props) => {
  const { todo, todos, setTodos } = props;

  function handleDelete(item) {
    console.log("Delete button clicked", item);
    setTodos(todos.filter((todo) => todo !== item));
  }

  function handleClick(name) {
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
  }

  const className = todo.done ? styles.completed : styles.notCompleted;

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={className} onClick={() => handleClick(todo.name)}>
          {todo.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(todo)}
            className={styles.deleteButton}
          >
            x
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
};

export default TodoItem;
