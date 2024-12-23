import React from 'react';

import './TodoList.css';

interface TodoListProps{
    items: { id: string; text: string }[];
    onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = props => {
    return (
        <ul>
            {props.items.map(todo => (//todoIdを引数として渡す。map関数ですべてのリストを返す
                <li key={todo.id}>
                <span>{todo.text}</span>
                <button onClick={props.onDeleteTodo.bind(null, todo.id)}>削除</button>
                </li>))}
        </ul>
    );
};

export default TodoList;