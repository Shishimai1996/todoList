import React, { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import Login from "./components/Login";
import { Todo } from "./todo.model";
import { CountUp } from "./components/CountUp";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]); //by todo.model.ts
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("jwt")
  );

  const API = process.env.REACT_APP_API_URL || "http://localhost:3001";

  useEffect(() => {
    const headers: Record<string, string> = {};
    if (token) headers["Authorization"] = `Bearer ${token}`;
    fetch(`${API}/todos`, { headers })
      .then(async (res) => {
        if (res.status === 401) {
          // token invalid or expired — clear and show login
          setToken(null);
          localStorage.removeItem("jwt");
          setTodos([]);
          return;
        }
        if (!res.ok) {
          setTodos([]);
          return;
        }
        const data = await res.json();
        if (Array.isArray(data)) setTodos(data);
        else setTodos([]);
      })
      .catch(() => setTodos([]));
  }, [token]);

  const todoAddHandler = async (text: string) => {
    const headers: Record<string, string> = { "Content-Type": "application/json" };
    if (token) headers["Authorization"] = `Bearer ${token}`;

    const res = await fetch(`${API}/todos`, {
      method: "POST",
      headers,
      body: JSON.stringify({ text }),
    });
    const newTodo = await res.json();
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const todoDeleteHandler = async (todoId: string) => {
    const headers: Record<string, string> = {};
    if (token) headers["Authorization"] = `Bearer ${token}`;
    await fetch(`${API}/todos/${todoId}`, {
      method: "DELETE",
      headers,
    });
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId)); //todoIdとtodo.idが一致したら削除。しなかったら新しい配列に格納する。★
  };
  return (
    <div className="App">
      {!token ? (
        <Login onLogin={(t: string) => { setToken(t); localStorage.setItem("jwt", t); }} />
      ) : (
        <>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button className="secondary-btn logout-btn" onClick={() => { setToken(null); localStorage.removeItem("jwt"); }}>Logout</button>
          </div>
          <NewTodo onAddTodo={todoAddHandler} />
        </>
      )}
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
