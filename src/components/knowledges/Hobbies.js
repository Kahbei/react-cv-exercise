import React from "react";

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Intérêts</h3>
            <ul>
                <li className="hobby">
                    <i className="fas fa-check-square"></i>
                    <span>Histoire</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-check-square"></i>
                    <span>Géopolitique</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-check-square"></i>
                    <span>Enculage de mouche</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-check-square"></i>
                    <span>Epicurien</span>
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;
