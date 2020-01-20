import React, {Component} from 'react';

import SwapiService from "../../services/swapi-service";
import './random-planet.css';
import Spinner from "../spinner";

export default class RandomPlanet extends Component {
    swapService = new SwapiService();

    state = {
        planet: {},
        loading: true
    };

    constructor() {
        super();
        this.updatePlanet()
    }

    onPlanetLoaded = (planet) => {
        this.setState({planet, loading: false});
    };

    onError = (err) => {
        // Disable loading
        //Show error component
    };

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 25 + 2);
        this.swapService.getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    };


    render() {
        const { loading, planet} = this.state;

        const spinner = loading ? <Spinner/> : null;
        const content = !loading ? <PlanetView planet={this.state.planet}/> : null;

        return (
            <div className="random-planet jumbotron rounded">
                {content}
                {spinner}
            </div>

        );
    }
}

const PlanetView = ({planet}) => {
    const {id, name, diameter, population, rotationPeriod} = planet;

    return (
        <React.Fragment>
            <img className="planet-image"
                 src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
            <div>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
};
