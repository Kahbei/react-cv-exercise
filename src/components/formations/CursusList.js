import React from "react";

const CursusList = (props) => {
    let { school, title, option, year, obtained, mention } = props.dataFormations;
    year = year.includes("now") ? year.replace("now", new Date().getFullYear()) : year;

    const optionCursus = option ? <i class="fas fa-award"></i> : null;

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
        <div>
            <h2>{title}</h2>
            {optionCursus}
            <p>Année : {year}</p>
            <p>Ecole : {school}</p>

            {obtainedDiplomas}
        </div>
    );
};

export default CursusList;
