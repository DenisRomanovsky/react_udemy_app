import React, {Component} from 'react';

import './person-details.css';
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

export default class PersonDetails extends Component {

    swapi = new SwapiService();

    state = {
        person: null,
        loading: true
    };

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.personId != prevProps.personId) {
            this.updatePerson();
        }
    }

    updatePerson = () => {
        const {personId} = this.props;

        if (!personId) {
            return
        }

        this.setState({loading: true});

        this.swapi.getPerson(personId)
            .then((person) => {
                this.setState({person, loading: false})
            })
    };

    render() {
        if (!this.state.person) {
            return (<div>Select a person from the list</div>)
        }

        const loading = this.state.loading;
        const person = loading ? null : <PersonView person={this.state.person}/>
        const spinner = loading ? <Spinner/> : null;


        return (
            <div className="person-details card">
                {person}
                {spinner}
            </div>
        )

    }
}

const PersonView = ({person}) => {
    const {id, name, gender, birthYear, eyeColor} = person;

    return (
        <React.Fragment>
            <img className="person-image"
                 src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}/>

            <div className="card-body">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Birth Year</span>
                        <span>{birthYear}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Eye Color</span>
                        <span>{eyeColor}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
};
