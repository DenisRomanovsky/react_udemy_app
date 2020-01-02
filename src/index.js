import React from "react";
import ReactDom from "react-dom";

import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";
import ToDoList from "./components/todo-list";

import './index.css';

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

ReactDom.render(<App/>, document.getElementById("root"));