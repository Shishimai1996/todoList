import React, { useRef } from "react";

import './NewTodo.css';

type NewTodoProps = {
    onAddTodo: (todoText: string) => void;
}
//propsでApp.tsxのtodohandler関数を受け取る
const NewTodo: React.FC<NewTodoProps> = props => {
    const textInputRef = useRef<HTMLInputElement>(null);//★inputDOMに入力された値を取得
    const todoSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();//not refresh
        const enteredText = textInputRef.current!.value;//formがサブミットされたらinputの要素を取得
        props.onAddTodo(enteredText);//connected with App.tsx

    };

    return (
        <form onSubmit={todoSubmitHandler}>
            <div className="form-control">
                <label htmlFor="todo-text">Todo内容</label>
                <input type="text" id="todo-text" ref={textInputRef} />
            </div>
            <button type="submit">TODO追加</button>
        
        </form>
    );
};
export default NewTodo;