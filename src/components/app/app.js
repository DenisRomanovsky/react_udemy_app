import React from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ToDoList from "../todo-list";

import './app.css';

const App = () => {
    const toDoData = [
        {label: 'Drink Coffee', id: 1},
        {label: 'Create React App', important: true, id: 2},
        {label: 'Get salary', id: 3}
    ];

    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3} />
            <div className="top-panel d-flex">
                <SearchPanel />
            </div>

            <ToDoList todos={toDoData} />
        </div>
    );
};

export default App;