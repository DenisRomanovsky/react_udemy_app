import React, {Component} from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ToDoList from "../todo-list";
import AddItem from "../add-item";

import './app.css';

export default class App extends Component {
    maxId = 0;

    createItem = (text, done, important) => {
        return {label: text, done: done, important: important, id: this.maxId++ }
    };

    findItemIndex = (id) => {
        return (this.state.toDoData.findIndex((el) => el.id === id));
    };

    toggleProperty = (arr, id, prop_name) => {
            let dataCopy = Object.assign([], toDoData);
            const idx = this.findItemIndex(id);
            const oldItem = arr[idx];
            const newItem = {...oldItem, [prop_name]: !oldItem[prop_name]};
            arr[idx]=newItem;

            return arr
    };


    state = {
        toDoData: [
            this.createItem('Drink Coffee', false, false),
            this.createItem('Create React App', false, true),
            this.createItem('Get salary', false, false),
        ]
    };

    onToggleImportant = (id) => {
        this.setState(({toDoData}) => {
            return({toDoData: this.toggleProperty(toDoData, id, 'important')})
        })
    };

    onToggleDone = (id) => {
        this.setState(({toDoData}) => {
            return({toDoData: this.toggleProperty(toDoData, id, 'done')})
        })
    };

    deleteItem = (id) => {
        console.log('del', id);
        this.setState(({toDoData}) => {
            let copy = Object.assign([], toDoData);
            copy.splice(this.findItemIndex(id), 1);
            return {toDoData: copy};
        })
    };

    addItem = (item_data) => {
        console.log('add', item_data);

        this.setState(({toDoData}) => {
            let copy = Object.assign([], toDoData);
            copy.push(this.createItem(item_data.label, false, item_data.important));
            return {toDoData: copy};
        })
    };

    render() {
        const toDoData = this.state.toDoData;
        const doneItemsCount = toDoData.filter((el) => el.done).length;
        const toDoItemsCount = toDoData.length - doneItemsCount;

        return (
            <div className="todo-app container">
                <AppHeader toDo={toDoItemsCount} done={doneItemsCount}/>
                <div className="top-panel d-flex">
                    <SearchPanel/>
                </div>

                <ToDoList todos={this.state.toDoData}
                          onDeleted={(id) => {
                              this.deleteItem(id);
                          }}
                          onToggleImportant={(id) => {
                              this.onToggleImportant(id);
                          }}
                          onToggleDone={(id) => {
                              this.onToggleDone(id);
                          }}/>
                <AddItem onAdd={(item_data) => { this.addItem(item_data)} }/>
            </div>
        );
    }
}
