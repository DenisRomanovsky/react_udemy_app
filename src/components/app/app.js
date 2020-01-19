import React, {Component} from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ToDoList from "../todo-list";

import './app.css';

export default class App extends Component {
    state = {
        toDoData: [
            {label: 'Drink Coffee', id: 1},
            {label: 'Create React App', important: true, id: 2},
            {label: 'Get salary', id: 3}
        ]
    };

    deleteItem = (id) => {
        console.log('del', id);
        this.setState(({toDoData}) => {
            let copy =  Object.assign([], toDoData);
            const idx = toDoData.findIndex((el) => el.id === id);
            copy.splice(idx, 1);
            return { toDoData: copy } ;
        })
    };

    render() {
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3}/>
                <div className="top-panel d-flex">
                    <SearchPanel/>
                </div>

                <ToDoList todos={this.state.toDoData}
                          onDeleted={(id) => {
                              this.deleteItem(id);
                          }}/>
            </div>
        );
    }
}
