import React, { useState } from 'react';
//import { Route } from 'react-router-dom';

import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Todo } from './todo.model';

// function App() {
//   return (
//     <div className="App">
     
//     </div>
//   );
// }
//functionComponent type
const App: React.FC = () => {
  const [todos, setTodos] = useState <Todo[]>([]); //by todo.model.ts
  const todoAddHandler = (text: string) => {
    setTodos(prevTodos => [...prevTodos,{ id: Math.random().toString(), text: text },]); //既存のステートを残して新規入力値を追加　★
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId))//todoIdとtodo.idが一致したら削除。しなかったら新しい配列に格納する。★
  }
  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
};

export default App;
