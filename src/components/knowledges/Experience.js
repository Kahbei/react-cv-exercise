import React from "react";
import { experienceData } from "../../data/experienceData";

const SingleExperience = (props) => {
    let { title, period, information } = props.experience;

    period = period.includes("now") ? period.replace("now", new Date().getFullYear()) : period;

    return (
        <div className={`exp-${props.elnb + 1}`}>
            <h4>{title}</h4>
            <h5>{period}</h5>
            <p>{information}</p>
        </div>
    );
};

const Experience = () => {
    if (experienceData.length > 3) {
        experienceData = experienceData.splice(3);
    }

    return (
        <div className="experience">
            <h3>Experience</h3>
            {experienceData.map((el) => (
                <SingleExperience id={el.id} experience={el} elnb={experienceData.indexOf(el)} />
            ))}
        </div>
    );
};

export default Experience;
