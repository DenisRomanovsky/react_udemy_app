import React, {Component} from 'react';

import './item-list.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

export default class ItemList extends Component {

    swapi = new SwapiService();

    state = {
        itemList: null
    };

    componentDidMount() {
        this.swapi.getAllPeople().then((people) => {
            this.setState({itemList: people});
        });
    }

    renderItems = (arr) => {
        return arr.map((person) => {
            const id = person.id;
            return (<li className="list-group-item"
            key={id}
            onClick={() => this.props.onItemSelected(id)}>
                {person.name}
            </li>)
        })
    };

    render() {

        const itemList = this.state.itemList;

        if (!itemList) {
            return <Spinner/>
        }

        return (
            <ul className="item-list list-group">
                {this.renderItems(itemList)}
            </ul>
        );
    }
}
