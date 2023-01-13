import React from "react";
import { skillsData } from "../../data/skillsData";

const Hobby = (props) => {
    let { caption } = props.hobby;

    return (
        <li className="hobby">
            <i className="fas fa-check-square"></i>
            <span>{caption}</span>
        </li>
    );
};

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Intérêts</h3>
            <ul>
                {skillsData.hobbies.map((el) => (
                    <Hobby key={el.id} hobby={el} />
                ))}
            </ul>
        </div>
    );
};

export default Hobbies;
