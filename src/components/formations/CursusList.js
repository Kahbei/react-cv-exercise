import React from "react";

const CursusList = (props) => {
    let { school, title, option, year, obtained, mention } = props.dataFormations;
    year = year.includes("now") ? year.replace("now", new Date().getFullYear()) : year;

    const optionCursus = option ? <h3> {option} </h3> : null;

    let obtainedDiplomas = "";

    if (obtained) {
        if (mention) {
            obtainedDiplomas = <p>Obtenu avec {mention}</p>;
        } else {
            obtainedDiplomas = <p>Obtenu sans mention</p>;
        }
    } else {
        obtainedDiplomas = <p>Pas obtenu</p>;
    }

    return (
        <div style={{ width: "100px", maxHeight: "300px" }}>
            <h2>{title}</h2>
            {optionCursus}
            <span>{year}</span>
            <span>{school}</span>

            {obtainedDiplomas}
        </div>
    );
};

export default CursusList;
