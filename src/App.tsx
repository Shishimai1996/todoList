import React, { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./todo.model";
import { CountUp } from "./components/CountUp";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]); //by todo.model.ts

  useEffect(() => {
    fetch("http://localhost:3001/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  const todoAddHandler = async (text: string) => {
    const res = await fetch("http://localhost:3001/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    const newTodo = await res.json();
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const todoDeleteHandler = async (todoId: string) => {
    await fetch(`http://localhost:3001/todos/${todoId}`, {
      method: "DELETE",
    });
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId)); //todoIdとtodo.idが一致したら削除。しなかったら新しい配列に格納する。★
  };
  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      {todos.length !== 0 && (
        <>
          <CountUp count={todos.length} />
          <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
        </>
      )}
    </div>
  );
};

export default App;
