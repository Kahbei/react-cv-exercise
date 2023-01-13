import React from "react";
import { skillsData } from "../../data/skillsData";

const Skill = (props) => {
    const { caption } = props.softSkills;

    return (
        <li>
            <i className="fas fa-check-square"></i>
            {caption}
        </li>
    );
};

const OtherSkills = () => {
    let softSkillsChunk = [];

    softSkillsChunk = skillsData.softSkills.reduce((result, item, index) => {
        const chunk = Math.floor(index / 4);

        if (!result[chunk]) {
            result[chunk] = [];
        }

        result[chunk].push(item);

        return result;
    }, []);

    return (
        <div className="otherSkills">
            <h3>Autres compétences</h3>
            <div className="list">
                {softSkillsChunk.map((elList) => (
                    <ul>
                        {elList.map((el) => (
                            <Skill softSkills={el} />
                        ))}
                    </ul>
                ))}
            </div>
        </div>
    );
};

export default OtherSkills;
