import React from "react";
import './todo-list.css'

import ToDoListItem from "../todo-list-item"

const ToDoList = ({todos, onDeleted}) => {

    const elements = todos.map((item) => {
        return (
            <li key={item.id} className="list-group-item">
                <ToDoListItem {...item}
                onDeleted={() => onDeleted(item.id)}
                />
            </li>
        );
    });

    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    );
};

export default ToDoList;