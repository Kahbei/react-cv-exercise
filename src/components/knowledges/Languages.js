import React, { Component } from "react";
import Progressbar from "./Progressbar";

export default class Languages extends Component {
    state = {
        languages: [
            {
                id: 1,
                value: "Javascript",
                xp: 1.8,
            },
            {
                id: 2,
                value: "HTML/CSS",
                xp: 2.0,
            },
            {
                id: 3,
                value: "PHP",
                xp: 2.0,
            },
            {
                id: 4,
                value: "Kotlin",
                xp: 0.8,
            },
        ],

        frameworks: [
            {
                id: 5,
                value: "React",
                xp: 1.0,
            },
            {
                id: 6,
                value: "Angular",
                xp: 0.8,
            },
            {
                id: 7,
                value: "Laravel",
                xp: 1.0,
            },
        ],
    };

    render() {
        let { languages, frameworks } = this.state;
        return (
            <div className="languagesFrameworks">
                <Progressbar languages={languages} className="languagesDisplay" title="Langages" />
                <Progressbar
                    className="frameworksDisplay"
                    title="Frameworks & Bibliothèques"
                    languages={frameworks}
                />
            </div>
        );
    }
}
