import React from "react";

const CursusList = (props) => {
    let { school, title, option, level, year, obtained, mention } = props.dataFormations;
    year = year.includes("now") ? year.replace("now", new Date().getFullYear()) : year;

    const optionCursus = option ? `Spécialisation ${option}` : null;
    const levelDiploma = level < 3 ? "" : `Niveau ${level}`;

    const displayComplementaryInformation =
        optionCursus && levelDiploma ? (
            <h3>
                {levelDiploma} - {optionCursus}
            </h3>
        ) : null;

    let obtainedDiplomas = "";

    const obtainedIcon = obtained ? <i className="fas fa-award"></i> : "";

    if (obtained) {
        if (mention) {
            obtainedDiplomas = <h4>Mention {mention}</h4>;
        } else {
            obtainedDiplomas = <h4>Sans mention</h4>;
        }
    } else {
        obtainedDiplomas = <h4>Non obtenu</h4>;
    }

    return (
        <div className="cursusInformation">
            <div className="headerBlock">
                <h2>{title}</h2>
                {displayComplementaryInformation}
                <h3>{year}</h3>
                {obtainedDiplomas}
            </div>
            <p>{school}</p>
            {obtainedIcon}
        </div>
    );
};

export default CursusList;
