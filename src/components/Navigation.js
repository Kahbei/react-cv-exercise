import React from "react";
import { Link } from "react-router-dom";

const YearCopyright = () => {
    return (
        <p>
            <a href="https://lmiot.ovh" target="_blank" rel="noreferrer">
                <i className="far fa-copyright"></i>
                Done with love - {new Date().getFullYear()} - LMOOIT.ovh
            </a>
        </p>
    );
};

const Navigation = () => {
    return (
        <>
            <div className="sidebar">
                <div className="id">
                    <div className="idContent">
                        <img src="./media/portrait.png" alt="portrait" />
                        <h3>Roger BONNEPOIRE</h3>
                    </div>
                </div>
                <div className="navigation">
                    <ul>
                        <li>
                            <Link exact to="/">
                                <i className="fas fa-home"></i>
                                <span>Accueil</span>
                            </Link>
                        </li>
                        <li>
                            <Link exact to="/competences">
                                <i className="fas fa-mountain"></i>
                                <span>compétences</span>
                            </Link>
                        </li>
                        <li>
                            <Link exact to="/portfolio">
                                <i className="fas fa-images"></i>
                                <span>Portfolio</span>
                            </Link>
                        </li>
                        <li>
                            <Link exact to="/contact">
                                <i className="fas fa-address-book"></i>
                                <span>Contact</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="socialNetwork">
                    <ul>
                        <li>
                            <a
                                href="https://www.linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-github"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.codepen.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-codepen"></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>
                    </ul>
                    <div className="signature">
                        <YearCopyright />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navigation;
