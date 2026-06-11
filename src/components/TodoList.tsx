import React from "react";
import "./TodoList.css";

interface TodoListProps {
  items: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <div>
      {props.items.length === 0 && <div style={{padding: '1rem', color: '#64748B'}}>No tasks yet — add your first task!</div>}
      <div className="stats">
        <div className="stat">
          <div className="stat-label">Total tasks</div>
          <div className="stat-value">{props.items.length}</div>
        </div>
        <div className="stat">
          <div className="stat-label">Active</div>
          <div className="stat-value">{props.items.length}</div>
        </div>
      </div>
      <div className="section-label">Active tasks</div>
      <ul>
        {props.items.map((todo) => (
          <li key={todo.id}>
            <div className="todo-dot"></div>
            <span className="todo-text">{todo.text}</span>
            <span className="todo-tag">active</span>
            <button
              className="delete-btn"
              onClick={props.onDeleteTodo.bind(null, todo.id)}
              aria-label="Delete task"
            >
              🗑
            </button>
          </li>
        ))}
      </ul>
      <div className="footer">Built with React · Node.js · PostgreSQL · AWS EC2</div>
    </div>
  );
};

export default TodoList;
