import React, { useRef } from "react";
import "./NewTodo.css";

type NewTodoProps = {
  onAddTodo: (todoText: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    if (enteredText.trim()) {
      props.onAddTodo(enteredText);
      textInputRef.current!.value = "";
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") todoSubmitHandler(event as any);
  };

  return (
    <div>
      <div className="header">
        <h1>My Tasks</h1>
        <p>Stay organised, get things done.</p>
        <div className="accent-bar"></div>
      </div>
      <div className="input-card">
        <div className="input-row">
          <input
            type="text"
            ref={textInputRef}
            placeholder="What needs to be done?"
            onKeyDown={handleKeyDown}
          />
          <button className="add-btn" onClick={todoSubmitHandler}>
            + Add task
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewTodo;
