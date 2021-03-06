// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import './Todo.css';
import Todo from './Todo';

const TodoList = (props) => {
    return (
        <ul className = 'todo-list'>
            {props.items.map(item => <Todo completeHandler = {props.completeHandler} item = {item}/>)}
        </ul>
    );
}

export default TodoList;