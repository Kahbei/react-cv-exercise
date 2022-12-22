import React, { Component } from "react";
import { portfolioData } from "../../data/portfolioData";
import Project from "./Project";

export default class ProjectList extends Component {
    state = {
        projects: portfolioData,
        radios: [
            {
                id: 1,
                value: "javascript",
            },
            {
                id: 2,
                value: "css",
            },
            {
                id: 3,
                value: "react",
            },
            {
                id: 4,
                value: "php",
            },
        ],
        selectedRadio: "javascript",
    };

    handleRadio = (e) => {
        let radio = e.target.value;
        this.setState({ selectedRadio: radio });
    };

    render() {
        let { projects, radios, selectedRadio } = this.state;
        return (
            <div className="portfolioContent">
                <ul className="radioDisplay">
                    {radios.map((radio) => {
                        return (
                            <li key={radio.id}>
                                <input
                                    type="radio"
                                    name="radio"
                                    checked={radio.value === selectedRadio}
                                    value={radio.value}
                                    id={radio.id}
                                    onChange={this.handleRadio}
                                />
                                <label htmlFor={radio.value}>{radio.value}</label>
                            </li>
                        );
                    })}
                </ul>
                <div className="projects">
                    {projects
                        .filter((item) => item.languages.includes(selectedRadio))
                        .map((itemFiltered) => {
                            return <Project key={itemFiltered.id} item={itemFiltered} />;
                        })}
                </div>
            </div>
        );
    }
}
