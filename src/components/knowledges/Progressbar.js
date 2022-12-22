import React from "react";

const Progressbar = (props) => {
    return (
        <div className={props.className}>
            <h3>{props.title}</h3>
            <div className="years">
                <span>Année(s) d'expérience</span>
                <span>1 an</span>
                <span>2 ans</span>
            </div>
            <div>
                {props.languages.map((item) => {
                    let xpYears = 2;
                    let progressbar = (item.xp / xpYears) * 100 - 5 + "%";
                    return (
                        <div key={item.id} className="languagesList">
                            <li>{item.value}</li>
                            <div className="progressBar" style={{ width: progressbar }}></div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Progressbar;
